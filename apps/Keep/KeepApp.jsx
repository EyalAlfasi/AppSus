import { keepService } from './services/keepService.js'
import { DynamicKeepCmp } from './cmps/DynamicKeepCmp.jsx';
import { AddNote } from './cmps/AddNote.jsx';

export class KeepApp extends React.Component {

    state = {
        notes: [],
        addBy: null,
        isToggleOn: false,
        edit: {
            note: null,
            actionName: null
        }

    }

    onToggle = () => {
        let toggleCopy = this.state.isToggleOn
        toggleCopy = !toggleCopy

        this.setState({
            isToggleOn: toggleCopy
        })
        console.log('string');
    }


    componentDidMount() {
        this.loadNotes();
    }


    loadNotes = () => {
        keepService.query().then(notes => {
            console.log(notes);
            this.setState({ notes })
        })
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

    onUpdateNote = (noteId) => {
        keepService.update(noteId).then(() => this.loadNotes)
    }

    onEditNotes = (note, actionName) => {
        const noteCopy = this.state.note
        const actionNameCopy = this.state.actionName
        this.setState({ note: noteCopy, actionName: actionNameCopy })
    }




    render() {
        const { notes, answers } = this.state

        return (<section >
            <div className="add-notes-container">

                {/* <i onClick={this.onToggle} className={this.state.isToggleOn ? 'ON' : 'OFF'} >MOOD</i> */}
                <AddNote onAddNote={this.onAddNote} />
            </div>
            <section className="notes-container">
                {notes.map((note, idx) => {
                    return (<DynamicKeepCmp key={idx} note={note}
                        onRemoveNote={this.onRemoveNote} />)
                })}

            </section>
        </section>
        )
    }
}
// onClick={this.onToggle} className={this.state.isToggleOn ? 'ON' : 'OFF'}