import { utilService } from "../../../services/utilService"
import { MailContent } from "./MailContent.jsx"
export class MailPreview extends React.Component {
    state = {
        isMailOpen: false
    }

    toggleMailContent = () => {
        this.setState({ isMailOpen: !this.state.isMailOpen })
    }


    render() {
        const { mail } = this.props;
        console.log(mail);
        return <section>
            <section className="mail-preview-container" onClick={this.toggleMailContent}>
                <h3>{mail.senderName}</h3>
                <div>
                    <h4>{mail.subject}</h4> <span>-</span>
                    <h5>{utilService.getShortText(mail.body, 25)}</h5>
                </div>
                <h5>{utilService.timeStampToDateTime(mail.sentAt)}</h5>
            </section>
            {this.state.isMailOpen && <MailContent mail={mail} />}
        </section>
    }
}