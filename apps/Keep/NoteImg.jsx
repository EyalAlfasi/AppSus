

export function NoteImg ({info}){

    return <section>
        <h2>{info.title}</h2>
        <img src={`${info.url}`} />
    </section>
}