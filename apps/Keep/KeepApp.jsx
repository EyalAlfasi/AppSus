import { keepService } from './services/keepService.js'
import { DynamicKeepCmp } from './cmps/DynamicKeepCmp.jsx';
import { AddNote } from './cmps/AddNote.jsx';
import { EditNotes } from './cmps/EditNotes.jsx';
import { NotesFilter } from './cmps/NotesFilter.jsx';

export class KeepApp extends React.Component {

    state = {
        notes: [],
        addBy: null,
        filterBy: {
            text: '',
            type: ''
        },
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

    onSetFilter = (filterBy) => {
        console.log('filterBy:', filterBy);
        this.setState({ filterBy });
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

    get NotesForDisplay () {
    
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.text, 'i');
       
        var any =this.state.notes.filter(note => 
            (filterRegex.test(note.text) || filterRegex.test(note.type)))
        console.log(any ,' anyyyy');
        return  any 
        

    }


    render() {
        const { notes, edit } = this.state
        const NotesForDisplay = this.NotesForDisplay
        
        return (<section >
            <div className="add-notes-container">
                <AddNote onAddNote={this.onAddNote} /> 
            </div>
            <div className="filter-by-container">
                <NotesFilter setFilter={this.onSetFilter} NotesForDisplay={NotesForDisplay} />
            </div>
            <section className="notes-container">
                <section>
                    <h2>Pinned Notes</h2>
                    {NotesForDisplay.map((note, idx) => {
                        if (note.isPinned) {
                            return (<DynamicKeepCmp key={note.id} note={note} onNoteEdit={this.onNoteEdit} />)
                        }
                    })}
                </section>
                <section>
                    <h2>UnPinned Notes</h2>
                    {NotesForDisplay.map((note, idx) => {
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
