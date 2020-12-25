
import { NotesBtn } from './NotesBtn.jsx'

export function NoteImg({note, onRemoveNote, onUpdateNote }) {

    return <section className="note note-img">
        <h2>{note.info.title}</h2>
        <img src={note.info.url} />
        <NotesBtn onUpdateNote={onUpdateNote} note={note} onRemoveNote={onRemoveNote} />
    </section>
}