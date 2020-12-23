import { KeepService } from './services/keepService.js'
import { DynamicKeepCmp } from '../Keep/DynamicKeepCmp.jsx';
import { AddNote } from '../Keep/AddNote.jsx';

export class KeepApp extends React.Component {

    state = {
        notes: [],
        addBy: null
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

    onRemovePet = (petId) => {
        petService.remove(petId).then(() => {
            this.loadPets()
        })
    }

    addNote = (note) => {
        keepService.addNote(note)
            .then(notes => this.setState({ notes }))
    }

    render() {
        const { notes, answers } = this.state

        return (<section>
            <h2>I'm the KeepApp component</h2>
            <input type="text" placeholder="whats on your mind.." />
            <div className="btn">
                <button onClick={this.onNoteTypeChange('text')}>todo</button>
                <button onClick={this.onNoteTypeChange('url')}>img</button>
                <button onClick={this.onNoteTypeChange('text')}>text</button>
            </div>
            <section className="notes-container">
            <AddNote addNote={this.addNote}/>
                {notes.map((note, idx) => {
                    return <DynamicKeepCmp key={idx} currCmp={note.type} info={note.info} />
                })}
            </section>
        </section>
        )
    }
}