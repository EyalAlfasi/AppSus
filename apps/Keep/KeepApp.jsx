import { KeepService } from './services/keepService.js'
import { DynamicKeepCmp } from '../Keep/DynamicKeepCmp.jsx';

export class KeepApp extends React.Component {

    state = {
        notes: [],
        // answers: []
        
    }

    componentDidMount() {
        this.loadNotes();
        console.log('am i working  or what??');
    }


    loadNotes = () => {
        KeepService.query().then(notes => {
            console.log(notes);
            this.setState({ notes })
        })
    }

    render() {
        const { notes, answers } = this.state

        return (<section>
            <h2>I'm the KeepApp component</h2>
            <input type="text" placeholder="whats on your mind.."/>
            <section className="notes-container">
            {notes.map((note,idx) => {
                return <DynamicKeepCmp key={idx} currCmp={note.type} info={note.info} />
            })}
            </section>
        </section>
        )
    }
}