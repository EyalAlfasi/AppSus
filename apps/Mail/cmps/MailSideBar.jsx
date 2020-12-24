import { utilService } from "../../../services/utilService.js"
import { mailService } from "../services/mailService.js"
import { MailContent } from "./MailContent.jsx"

export class MailSideBar extends React.Component {
    state = {
    }


    render() {
        const { onSetTab } = this.props
        return <section className="mail-sidebar-container">
            <button className="compose-btn"><i className="fa fa-plus"></i> Compose</button>
            <section className="mail-sidebar-tabs">
                <ul>
                    <li onClick={() => onSetTab('isInbox')}><i className="fa fa-inbox"></i>Inbox</li>
                    <li onClick={() => onSetTab('isStarred')}><i className="fa fa-star" ></i>Starred</li>
                    <li onClick={() => onSetTab('isSent')}><i className="fa fa-send"></i>Sent</li>
                    <li onClick={() => onSetTab('isDraft')}><i className="fa fa-file-text"></i>Drafts</li>
                </ul>
            </section>
        </section>
    }
}