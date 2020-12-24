

export function NoteImg ({info}) {

    return <section className="note note-img">
        <h2>{info.title}</h2>
        <img src={info.url} />
    </section>
}