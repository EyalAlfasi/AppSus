import { keepService } from './services/keepService.js'
import { DynamicKeepCmp } from './cmps/DynamicKeepCmp.jsx';
import { AddNote } from './cmps/AddNote.jsx';
import { EditNotes } from './cmps/EditNotes.jsx';

export class KeepApp extends React.Component {

    state = {
        notes: [],
        addBy: null,
        edit: {
            note: null,
            actionName: ''
        }

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

    onNoteEdit = (note, actionName) => {
        
        const editCopy = { ...this.state.edit }
        editCopy.note = note
        editCopy.actionName = actionName
        this.setState({ edit: editCopy })

    }

    onAddNote = (newNote) => {
        keepService.addNote(newNote)
            .then(() => this.loadNotes())

    }

    afterEdit = () => {
        const editCopy = { ...this.state.edit }
        editCopy.note = null
        this.setState({ edit: editCopy })
        this.loadNotes()
    }

  
    render() {
        const { notes, edit } = this.state

        return (<section >
            <div className="add-notes-container">
                <AddNote onAddNote={this.onAddNote} />
            </div>
            <section className="notes-container">
                <section>
                <h2>Pinned Notes</h2>
                {notes.map((note, idx) => {
                    if (note.isPinned) {
                        return (<DynamicKeepCmp key={note.id} note={note} onNoteEdit={this.onNoteEdit} />)
                    }
                })}
                </section>
                <section>
                <h2>UnPinned Notes</h2>
                {notes.map((note, idx) => {
                    if (!note.isPinned) {
                        return (<DynamicKeepCmp key={note.id} note={note} onNoteEdit={this.onNoteEdit} />)

                    }
                })}
                </section>
                {edit.note && <EditNotes edit={edit} afterEdit={this.afterEdit} />}
            </section>
           
        </section>
        )
    }
}
