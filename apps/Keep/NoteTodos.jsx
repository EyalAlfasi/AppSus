
export function NoteTodos({ info }) {

    return <label className="note note-todos">
        <h4>{info.label}</h4>
        {info.todos.map((todo, idx) => 
            <section className="todos-content" key={idx}>
                <h3>{todo.txt} {todo.doneAt}</h3>
            </section>
        )}
        {/* <h3>{info.todos[0].txt} {info.todos[0].doneAt}</h3> */}
    </label>
}