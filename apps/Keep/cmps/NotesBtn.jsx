import { keepService } from '../services/keepService.js'


export class NotesBtn extends React.Component {


    render(){
        return(
            <section className="edit-btns">
                <button onClick=  {() => this.props.onRemoveNote(this.props.noteId)}>X</button>
                {/* <button>Y</button> */}
                <div className="color-picker">
                <span className="yellow">.</span>
                <span className="blue">.</span>
                <span className="pink">.</span>
                </div>
                
            </section>
        )
    }
}