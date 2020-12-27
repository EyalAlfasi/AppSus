import { mailService } from "./services/mailService.js"
import { MailSideBar } from "./cmps/MailSideBar.jsx"
import { MailPreview } from "./cmps/MailPreview.jsx"
import { MailCompose } from "./cmps/MailCompose.jsx"
import { MailDetails } from "./cmps/MailDetails.jsx";
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class MailApp extends React.Component {

    state = {
        mails: [],
        selectedMail: {},
        filterBy: {
            read: false,
            text: ''
        },
        currTab: 'isInbox',
        onComposeMode: false
    }

    componentDidMount() {
        this.loadMails();
    }

    onSelectMail = (selectedMail) => {
        this.setState({ selectedMail });
    }

    loadMails = () => {
        mailService.query().then(mails => {
            this.setState({ mails });
        });
    }

    openComposer = () => {
        this.setState({ onComposeMode: true });
    }

    closeComposer = () => {
        this.setState({ onComposeMode: false });
    }

    onMarkread = (mailId) => {
        mailService.markRead(mailId).then(() => {
            this.loadMails()
        })
    }

    onRemoveMail = (mailId) => {
        mailService.removeMail(mailId).then(() => {
            this.loadMails()
        })
    }

    onStarMail = (ev, mailId) => {
        ev.stopPropagation()
        mailService.starMail(mailId).then(() => {
            this.loadMails()
        })
    }

    onMailUndraft = (mailId) => {
        mailService.unDraftMail(mailId).then(() => {
            this.loadMails()
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy });
    }

    get mailsForDisplay() {
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.text, 'i');
        return this.state.mails.filter(mail =>
            // String filters
            (filterRegex.test(mail.subject) || filterRegex.test(mail.body) ||
                filterRegex.test(mail.senderName) || filterRegex.test(mail.senderEmailAddress))
            // String filters

            //Tab filter
            && mail[this.state.currTab]
            //Tab filter
        );
    }

    onSetTab = (tab) => {
        this.setState({ currTab: tab });
    }

    onSendMail = (inputs, isDraft) => {
        if ((!inputs['subject'] || !inputs['message']) && !isDraft) return
        this.setState({ onComposeMode: false });
        mailService.sendMail(inputs, isDraft).then(() => {
            this.loadMails()
        })
    }

    render() {
        const mailsForDisplay = this.mailsForDisplay
        return <section>
            <section className="mail-and-sidebar-container">
                <MailSideBar openComposer={this.openComposer} onSetFilter={this.onSetFilter} onSetTab={this.onSetTab} />
                <section className="mail-list-container">
                    {mailsForDisplay.map(mail => {
                        return <MailPreview onMarkread={this.onMarkread} onStarMail={this.onStarMail}
                            onSelectMail={this.onSelectMail} key={mail.id} openComposer={this.openComposer}
                            mail={mail} onRemove={this.onRemoveMail} />
                    })}
                </section>
            </section>
            {this.state.onComposeMode && <MailCompose closeComposer={this.closeComposer}
                onSendMail={this.onSendMail} onRemove={this.onRemoveMail} />}
        </section>
    }
}