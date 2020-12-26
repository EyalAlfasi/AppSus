import { MailDetails } from "../cmps/MailDetails.jsx"
import { mailService } from "../services/mailService.js"


export class MailFullView extends React.Component {

    state = {
        mail: {}
    }

    componentDidMount() {
        const { mailId } = this.props.match.params;
        mailService.getMailById(mailId).then(mail=>{
            this.setState({mail})
        })
    }

    render() {
        return <MailDetails onRemove={this.props.onRemove} mail={this.state.mail} />
    }
}