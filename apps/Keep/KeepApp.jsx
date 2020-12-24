import { keepService } from './services/keepService.js'
import { DynamicKeepCmp } from '../Keep/DynamicKeepCmp.jsx';
import { AddNote } from '../Keep/AddNote.jsx';

export class KeepApp extends React.Component {

    state = {
        notes: [],
        addBy: null,
        // isToggleOn: false
    }

    // onToggle = () => {
    //     let toggleCopy = this.state.isToggleOn
    //     toggleCopy = !toggleCopy

    //     this.setState({
    //         isToggleOn: toggleCopy
    //     })
    //     console.log('string');
    // }


    componentDidMount() {
        this.loadNotes();
    }


    loadNotes = () => {
        keepService.query().then(notes => {
            console.log(notes);
            this.setState({ notes })
        })
    }
    onNoteTypeChange = (type) => {

        // setState({addBy:type})

    }

    onRemoveNote = (noteId) => {
        keepService.remove(noteId).then(() => {
            this.loadNotes()
        })
    }

    onAddNote = (newNote) => {
        keepService.addNote(newNote)
            .then(() => this.loadNotes())
            
    }

    render() {
        const { notes, answers } = this.state

        return (<section>
            <div className="add-notes-container">
                {/* <i onClick={this.onToggle} className={this.state.isToggleOn ? 'ON' : 'OFF'} >MOOD</i> */}
                <AddNote onAddNote={this.onAddNote} />
            </div>
            <section className="notes-container">
                {notes.map((note, idx) => {
                    return <DynamicKeepCmp key={idx} currCmp={note.type} info={note.info} />
                })}
            </section>
        </section>
        )
    }
}