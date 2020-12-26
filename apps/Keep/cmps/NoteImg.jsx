
import { NotesBtn } from './NotesBtn.jsx'

export function NoteImg({note,onNoteEdit  }) {

    return <section className="note note-img" style={{backgroundColor: note.style.backgroundColor}}>
        <h2>{note.info.title}</h2>
        <img src={note.info.url} />
        <NotesBtn onNoteEdit={onNoteEdit} note={note}  />
    </section>
}