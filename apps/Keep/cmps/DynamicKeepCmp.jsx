import { NoteText } from './NoteText.jsx';
import { NoteImg } from './NoteImg.jsx';
import { NoteTodos } from './NoteTodos.jsx';
import { NoteVideo } from './NoteVideo.jsx';


export function DynamicKeepCmp({ note, onRemoveNote }) {

    switch (note.type) {
        case 'NoteText':
            return <NoteText note={note} onRemoveNote={onRemoveNote} />
        case 'NoteImg':
            return <NoteImg note={note} onRemoveNote={onRemoveNote} />
        case 'NoteTodos':
            return <NoteTodos note={note} onRemoveNote={onRemoveNote} />
        case 'NoteVideo':
            return <NoteVideo note={note} onRemoveNote={onRemoveNote} />
    }
    return <p>UNKNWON</p>
}
