import { NotesBtn } from './NotesBtn.jsx'
export function NoteTodos({ note, onNoteEdit }) {

    return <section className="note note-todos" style={{ backgroundColor: note.style.backgroundColor }}>
        <h4>{note.info.label}</h4>
        <section>
            {note.info.todos.map((todo, idx) =>
                <section className="todos-content" key={idx}>
                    <h3 onClick={() => onNoteEdit(note, 'Mark')} style={{ textDecorationLine: `${note.isMarked ? 'line-through' : 'none'}` }}>{todo.txt} {todo.doneAt}</h3>
                </section>

            )}
        </section>

        <NotesBtn note={note} onNoteEdit={onNoteEdit} />
    </section>

}

