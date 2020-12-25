import {NotesBtn} from './NotesBtn.jsx'
export function NoteTodos({ note ,onRemoveNote , onUpdateNote}) {
    
    return <section className="note note-todos">
        <h4>{note.info.label}</h4>
        {note.info.todos.map((todo, idx) => 
            <section  className="todos-content" key={idx}>
                <h3>{todo.txt} {todo.doneAt}</h3>
            </section>
        )}
       <NotesBtn onUpdateNote={onUpdateNote} note={note} onRemoveNote={onRemoveNote}/>
    </section>
    
}
 
