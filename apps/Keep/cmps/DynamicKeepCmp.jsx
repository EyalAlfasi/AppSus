import { NoteText } from './NoteText.jsx';
import { NoteImg } from './NoteImg.jsx';
import { NoteTodos } from './NoteTodos.jsx';
import { NoteVideo } from './NoteVideo.jsx';


export function DynamicKeepCmp({ currCmp, info, noteId, onRemoveNote }) {

    switch (currCmp) {
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
