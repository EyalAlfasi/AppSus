import { KeepService } from './services/keepService.js'
import { DynamicKeepCmp } from '../Keep/DynamicKeepCmp.jsx';
import { AddNote } from '../Keep/AddNote.jsx';

export class KeepApp extends React.Component {

    state = {
        notes: [],
        addBy: null,
        isToggleOn: false
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
        KeepService.query().then(notes => {
            console.log(notes);
            this.setState({ notes })
        })
    }
    onNoteTypeChange = (type) => {

        // setState({addBy:type})

    }

    onRemoveNote = (noteId) => {
        KeepService.remove(noteId).then(() => {
            this.loadNotes()
        })
    }

    onAddNote = (newNote) => {
        KeepService.addNote(newNote)
        .then(notes => this.setState({ notes }))
        console.log('');
    }
   
    render() {
        const { notes, answers } = this.state

        return (<section>
            <h2>I'm the KeepApp component</h2>
            <i onClick={this.onToggle} className={this.state.isToggleOn ? 'ON' : 'OFF'} >MOOD</i>
            {/* <input type="text" placeholder="whats on your mind.." /> */}
            {/* <div className="btn">
                <button onClick={this.onNoteTypeChange('text')}>todo</button>
                <button onClick={this.onNoteTypeChange('url')}>img</button>
                <button onClick={this.onNoteTypeChange('text')}>text</button>
            </div> */}
            <section className="notes-container">
                <AddNote onAddNote={this.onAddNote} />
                {notes.map((note, idx) => {
                    return <DynamicKeepCmp key={idx} currCmp={note.type} info={note.info} />
                })}
            </section>
        </section>
        )
    }
}