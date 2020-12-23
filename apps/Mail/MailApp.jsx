import { mailService } from "./services/mailService.js"
import { MailSideBar } from "./cmps/MailSideBar.jsx"
import { MailPreview } from "./cmps/MailPreview.jsx"
import { MailFilter } from "./cmps/MailFilter.jsx"


export class MailApp extends React.Component {

    state = {
        mails: [],
        selectedMail: [],
        filterBy: {
            read: false,
            text: ''
        }
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
        return this.state.mails.filter(mail =>
            filterRegex.test(mail.subject) || filterRegex.test(mail.body) ||
            filterRegex.test(mail.senderName) || filterRegex.test(mail.senderEmailAddress)
        );
    }

    render() {
        const mailsForDisplay = this.mailsForDisplay
        return <section className="mail-list-container">
            <MailFilter setFilter={this.onSetFilter} />
            {mailsForDisplay.map(mail => {
                return <MailPreview key={mail.id} mail={mail} onRemove={this.onRemoveMail} />
            })}
        </section>
    }
}