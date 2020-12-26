import { utilService } from "../../../services/utilService.js"
import { mailService } from "../services/mailService.js"
import { MailDetails } from "./MailDetails.jsx"


export class MailPreview extends React.Component {
    state = {
        isMailOpen: false
    }

    toggleMailContent = () => {
        this.setState({ isMailOpen: !this.state.isMailOpen })
    }

    render() {

        const { mail, onRemove, openComposer } = this.props;
        console.log(mail);
        return <section>
            <section className="mail-preview-container" onClick={this.toggleMailContent}>
                <div className="sender-name-container">
                    <h3 style={{ backgroundColor: mail.backgroundColor }} >{utilService.getNameInitials(mail.senderName)}</h3>
                </div>
                <div className="mail-preview-subject-container">
                    <h4>{mail.subject}</h4> <span>-</span>
                    <h5>{utilService.getShortText(mail.body, 25)}</h5>
                </div>
                <div className="mail-preview-datetime-container">
                    <h5>{utilService.timeStampToDateTime(mail.sentAt)}</h5>
                </div>
            </section>
            {this.state.isMailOpen && <MailDetails openComposer={openComposer} onRemove={onRemove} mail={mail} />}
        </section>
    }
}