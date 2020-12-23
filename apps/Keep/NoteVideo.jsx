export function NoteVideo({ info, isPinned, style, id }) {
  // check the embed thing

  return (
    <article className="note-video" >
      <h1>{info.title}</h1>

      <div className="video-container">
        {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/vmAaVgUzNh8"></iframe> */}
        <iframe width="420" height="345" src="https://www.youtube.com/embed/7cfWXcER8W8" ></iframe>
      </div>
    </article>
  )
}


