import { NotesBtn } from './NotesBtn.jsx'


export function NoteVideo({ note, onNoteEdit }) {
  // check the embed thing

  return (
    <section className="note " >
     
      <div className="video-container" style={{ backgroundColor: note.style.backgroundColor }}>
      <i className="note fa fa-video-camera"></i>
      <h4>{note.info.title}</h4>
        <iframe width="260" height="130" src={note.info.url} ></iframe>
        <NotesBtn note={note} onNoteEdit={onNoteEdit} />
      </div>
    </section>
  )
}


