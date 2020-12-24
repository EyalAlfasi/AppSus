import {NotesBtn} from './NotesBtn.jsx'

export function NoteText({ info, noteId ,onRemoveNote}) {
   
    return ( <section className="note note-text">
       <h1>{info.txt}</h1> 
      

       <NotesBtn note={info} noteId={noteId} onRemoveNote={onRemoveNote}/>
    </section>)
        {/* <input placeholder={info.label} onChange={(ev) => {
            // onAns(ev.target.value)
        }} /> */}
    

}