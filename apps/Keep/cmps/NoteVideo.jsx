import { NotesBtn } from './NotesBtn.jsx'


export function NoteVideo({ note, onRemoveNote, onUpdateNote }) {
  // check the embed thing

  return (
    <article className="note-video" >
      <h2>{note.info.title}</h2>
      <div className="video-container">
        <iframe width="300" height="300" src={note.info.url} ></iframe>
      </div>
      <NotesBtn onUpdateNote={onUpdateNote} note={note}  onRemoveNote={onRemoveNote} />
    </article>
  )
}


