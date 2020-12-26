import {NotesBtn} from './NotesBtn.jsx'
export function NoteTodos({ note ,onNoteEdit}) {
    
    return <section className="note note-todos" style={{backgroundColor: note.style.backgroundColor}}>
        <h4>{note.info.label}</h4>
        {note.info.todos.map((todo, idx) => 
            <section  className="todos-content" key={idx}>
                <h3>{todo.txt} {todo.doneAt}</h3>
            </section>
        )}
       <NotesBtn  note={note} onNoteEdit={onNoteEdit} />
    </section>
    
}
 
