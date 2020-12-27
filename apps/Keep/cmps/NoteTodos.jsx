import { NotesBtn } from './NotesBtn.jsx'
export function NoteTodos({ note, onNoteEdit }) {

    return <section className="note note-todos" style={{ backgroundColor: note.style.backgroundColor }}>
        <i className="fa fa-list" ></i>
        <h3 className="todo-lable">{note.info.label}</h3>
        <section>
            {note.info.todos.map((todo, idx) =>
                <section className="todos-content" key={idx}>
                    <p onClick={() => onNoteEdit(note, 'Mark')} style={{ textDecorationLine: `${note.isMarked ? 'line-through' : 'none'}` }}>{todo.txt}   <span> {todo.doneAt}</span></p>

                </section>

            )}
        </section>

        <NotesBtn note={note} onNoteEdit={onNoteEdit} />
    </section>

}

