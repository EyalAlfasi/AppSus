
import {NotesBtn} from './NotesBtn.jsx'

export function NoteImg ({info, noteId ,onRemoveNote}) {

    return <section className="note note-img">
        <h2>{info.title}</h2>
        <img src={info.url} />
        <NotesBtn note={info} noteId={noteId} onRemoveNote={onRemoveNote}/>
    </section>
}