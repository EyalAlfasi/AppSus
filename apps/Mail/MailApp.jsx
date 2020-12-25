import { mailService } from "./services/mailService.js"
import { MailSideBar } from "./cmps/MailSideBar.jsx"
import { MailPreview } from "./cmps/MailPreview.jsx"
import { MailCompose } from "./cmps/MailCompose.jsx"



export class MailApp extends React.Component {

    state = {
        mails: [],
        selectedMail: [],
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


    loadMails = () => {
        mailService.query().then(mails => {
            this.setState({ mails });
        });
    }

    openComposer = () => {
        this.setState({ onComposeMode: true });
    }

    onRemoveMail = (mailId) => {
        mailService.removeMail(mailId).then(() => {
            this.loadMails()
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy });
    }

    get mailsForDisplay() {
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.text, 'i');
        console.log(this.state.currTab)
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
        console.log(tab);
        this.setState({ currTab: tab });
    }

    onSendMail = (inputs) => {
        if (!inputs['subject'] || !inputs['message']) return
        this.setState({ onComposeMode: false });
        mailService.sendMail(inputs).then(() => {
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
                        return <MailPreview key={mail.id} mail={mail} onRemove={this.onRemoveMail} />
                    })}
                </section>
            </section>
            {this.state.onComposeMode && <MailCompose onSendMail={this.onSendMail} onRemove={this.onRemoveMail} />}
        </section>
    }
}