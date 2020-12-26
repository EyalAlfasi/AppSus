import { NoteText } from './NoteText.jsx';
import { NoteImg } from './NoteImg.jsx';
import { NoteTodos } from './NoteTodos.jsx';
import { NoteVideo } from './NoteVideo.jsx';



export function DynamicKeepCmp({ note, onNoteEdit }) {

    switch (note.type) {
        case 'NoteText':
            return <NoteText note={note} onNoteEdit={onNoteEdit} />
        case 'NoteImg':
            return <NoteImg note={note} onNoteEdit={onNoteEdit} />
        case 'NoteTodos':
            return <NoteTodos note={note} onNoteEdit={onNoteEdit} />
        case 'NoteVideo':
            return <NoteVideo note={note} onNoteEdit={onNoteEdit} />
    }
    return <p>UNKNWON</p>
}
