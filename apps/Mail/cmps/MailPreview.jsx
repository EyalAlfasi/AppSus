import { utilService } from "../../../services/utilService.js"
import { mailService } from "../services/mailService.js"
import { MailDetails } from "./MailDetails.jsx"


export class MailPreview extends React.Component {
    state = {
        isMailOpen: false
    }

    selectMail = () => {
        const { mail, onSelectMail, onMarkread } = this.props
        this.setState({ isMailOpen: !this.state.isMailOpen })
        onSelectMail(mail);
        onMarkread(mail.id);

    }

    render() {

        const { mail, onRemove, openComposer, onStarMail } = this.props;
        return <section>
            <section className={`mail-preview-container ${(mail.isRead) ? 'preview-read' : 'preview-unread'}`} onClick={this.selectMail}>
                <i className={mail.isStarred ? 'fa fa-star' : 'fa fa-star-o'} onClick={(ev) => onStarMail(ev, mail.id)}></i>
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
            {this.state.isMailOpen && <MailDetails mail={mail} openComposer={openComposer} onRemove={onRemove} mail={mail} />}
        </section>
    }
}