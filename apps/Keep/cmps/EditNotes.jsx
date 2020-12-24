
export function EditNotes() {

    switch (bgcColor) {
        case 'NoteText':
            return <NoteText info={info} noteId={noteId} onRemoveNote={onRemoveNote} />
        case 'NoteImg':
            return <NoteImg info={info} noteId={noteId} onRemoveNote={onRemoveNote}/>
        case 'NoteTodos':
            return <NoteTodos info={info} noteId={noteId} onRemoveNote={onRemoveNote}/>
        case 'NoteVideo':
            return <NoteVideo info={info} noteId={noteId} onRemoveNote={onRemoveNote}/>
    }
    return <p>UNKNWON</p>
}
