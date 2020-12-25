import { mailService } from "./services/mailService.js"
import { MailSideBar } from "./cmps/MailSideBar.jsx"
import { MailPreview } from "./cmps/MailPreview.jsx"


export class MailApp extends React.Component {

    state = {
        mails: [],
        selectedMail: [],
        filterBy: {
            read: false,
            text: ''
        },
        currTab: 'isInbox'
    }

    componentDidMount() {
        this.loadMails();
    }


    loadMails = () => {
        mailService.query().then(mails => {
            this.setState({ mails });
        });
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

    render() {
        const mailsForDisplay = this.mailsForDisplay
        return <section className="mail-list-container">
            <section className="mail-and-sidebar-container">
                <MailSideBar onSetFilter={this.onSetFilter} onSetTab={this.onSetTab} />
                <section className="mail-list-container">
                    {mailsForDisplay.map(mail => {
                        return <MailPreview key={mail.id} mail={mail} onRemove={this.onRemoveMail} />
                    })}
                </section>
            </section>
        </section>
    }
}