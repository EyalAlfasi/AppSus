import { keepService } from "../services/keepService"


export class EditNotes extends React.Component {

    componentDidMount() {
        this.onEdit()

    }

    onEdit = () =>{
        const {edit} = this.props
        if(edit.actionName === 'open-modal') this.setState({showUpdate: !this.state.showUpdate})
        else{
        keepService.editNote(edit)
        this.props.afterEdit()
        }
    }


        render(){
    return (
        <section>
            
        </section>

    )
}
}