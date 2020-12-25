import {NotesBtn} from './NotesBtn.jsx'

export function NoteText({ note ,onRemoveNote, onUpdateNote}) {
   
    return ( <section className="note note-text">
       <h1>{note.info.txt}</h1> 
      

       <NotesBtn onUpdateNote={onUpdateNote} note={note} onRemoveNote={onRemoveNote}/>
    </section>)
        {/* <input placeholder={info.label} onChange={(ev) => {
            // onAns(ev.target.value)
        }} /> */}
    

}