import { keepService } from '../services/keepService.js'
import { NotesUpdate } from './NotesTextEdit.jsx';
import { ColorPalette } from './ColorPalette.jsx';



export class NotesBtn extends React.Component {

    state = {
        displayColors: false
    }

    onColorEdit =(color) =>{
        this.setState({displayColors: false},()=>{
            this.props.onNoteEdit(this.props.note , color)
        })
    }

    render() {
        const { note, onNoteEdit } = this.props
        return (
            <section className="edit-btns">
                <button onClick={()=> onNoteEdit(note,'Pinned')}>pin</button>
                <button onClick={()=> onNoteEdit(note,'Clone')}>Clone</button>
                <button onClick={() => {this.setState({displayColors : !this.state.displayColors})}}>color</button>
                <button onClick={() => onNoteEdit(note, 'Remove')} >DEL</button>
                <button onClick={() => onNoteEdit(note, 'open-modal')} className="update">update</button>
                { this.state.displayColors && <ColorPalette onColorEdit={this.onColorEdit}/>}
            </section>
        )
    }
}