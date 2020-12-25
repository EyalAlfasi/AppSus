import { keepService } from '../services/keepService.js'
import { NotesUpdate } from './NotesTextEdit.jsx';



export class NotesBtn extends React.Component {



    render() {
        return (
            <section className="edit-btns">
                <button onClick={() => this.props.onRemoveNote(this.props.note.id)}>X</button>
                {/* <button>Y</button> */}
                <div className="color-picker">
                    <span className="yellow">.</span>
                    <span className="blue">.</span>
                    <span className="pink">.</span>
                </div>
                <button className="update">update</button>
                
                {/* <NotesUpdate onUpdateNote={this.props.onUpdateNote} noteId={this.props.noteId} /> */}
            </section>
        )
    }
}