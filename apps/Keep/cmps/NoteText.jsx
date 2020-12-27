import {NotesBtn} from './NotesBtn.jsx'


export function NoteText({ note ,onNoteEdit}) {


   
    return ( <section className="note note-text" style={{backgroundColor: note.style.backgroundColor}} >
        <i className="fa fa-sticky-note" ></i>
       <h1>{note.info.txt}</h1> 
      
        
       <NotesBtn  note={note} onNoteEdit={onNoteEdit}/>
       
    </section>)
        {/* <input placeholder={info.label} onChange={(ev) => {
            // onAns(ev.target.value)
        }} /> */}
    

}

// {{backgroundColor : `${note.style}`}}