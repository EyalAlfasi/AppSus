import { utilService } from "../../../services/utilService.js"
import { mailService } from "../services/mailService.js"
import { MailContent } from "./MailDetails.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"


export class MailSideBar extends React.Component {
    state = {
        open: false
    }

    openSidebar = () => {
        console.log(this.state.open);
        this.setState({ open: !this.state.open })
    }

    render() {
        const { onSetTab, openComposer } = this.props
        const counts = mailService.getMailTypesCount()
        return <section className={`mail-sidebar-container ${this.state.open && 'open-sidebar'}`}>
            <MailFilter onSetFilter={this.props.onSetFilter} />
            <button onClick={() => openComposer()} className="compose-btn"><i className="fa fa-plus"></i> Compose</button>
            <section className="mail-sidebar-tabs">
                <ul>
                    <li onClick={() => onSetTab('isInbox')}><span><i className="fa fa-inbox"></i>Inbox</span>
                        {counts.inbox !== 0 && <span>{counts.inbox}</span>} </li>
                    <li onClick={() => onSetTab('isStarred')}><span><i className="fa fa-star" ></i>Starred</span>
                        {counts.starred !== 0 && <span>{counts.starred}</span>}</li>
                    <li onClick={() => onSetTab('isSent')}><span><i className="fa fa-send"></i>Sent</span>
                        {counts.sent !== 0 && <span>{counts.sent}</span>}</li>
                    <li onClick={() => onSetTab('isDraft')}><span><i className="fa fa-file-text"></i>Drafts</span>
                        {counts.draft !== 0 && <span>{counts.draft}</span>}</li>
                    <li onClick={() => onSetTab('isTrash')}><span><i className="fa fa-trash"></i>Trash</span>
                        {counts.trash !== 0 && <span>{counts.trash}</span>}</li>
                </ul>
            </section>
            <button className={`show-sidebar-btn fa ${this.state.open ? ' fa-angle-double-left' : 'fa-angle-double-right'}`}
                onClick={this.openSidebar}></button>
        </section>
    }
}