export function NoteVideo({ info, isPinned, style, id }) {
  // check the embed thing

  return (
    <article className="note-video" >
      <h2>{info.title}</h2>
      <div className="video-container">
        <iframe width="300" height="300" src={info.url} ></iframe>
      </div>
    </article>
  )
}


