import {NotesBtn} from './NotesBtn.jsx'
export function NoteTodos({ info, noteId ,onRemoveNote }) {
    
    return <section className="note note-todos">
        <h4>{info.label}</h4>
        {info.todos.map((todo, idx) => 
            <section  className="todos-content" key={idx}>
                <h3>{todo.txt} {todo.doneAt}</h3>
            </section>
        )}
       <NotesBtn note={info} noteId={noteId} onRemoveNote={onRemoveNote}/>
    </section>
    
}
 
