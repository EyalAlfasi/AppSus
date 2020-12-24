import { NoteText } from './NoteText.jsx';
import { NoteImg } from './NoteImg.jsx';
import { NoteTodos } from './NoteTodos.jsx';
import { NoteVideo } from './NoteVideo.jsx';


export function DynamicKeepCmp({ currCmp, info }) {
    switch (currCmp) {
        case 'NoteText':
            return <NoteText info={info} />
        case 'NoteImg':
            return <NoteImg info={info} />
        case 'NoteTodos':
            return <NoteTodos info={info} />
        case 'NoteVideo':
            return <NoteVideo info={info} />
    }
    return <p>UNKNWON</p>
}
