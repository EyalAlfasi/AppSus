export class MailCompose extends React.Component {

    state = {
        newMailContent: {
            subject: '',
            message: ''
        }
    }

    handleInputs = (ev) => {
        console.log(ev.target.value);
        const inputs = { ...this.state.newMailContent }
        inputs[ev.target.name] = ev.target.value
        this.setState({ newMailContent: inputs })
    }

    render() {
        const { onRemove, mailId, onSendMail } = this.props
        return <section className="compose-container">
            <h2 className="new-mail-title">New Message</h2>
            <div className="compose-inputs">
                <input type="text" name="compose-to" placeholder="To:" />
                <input type="text" value={this.state.newMailContent.subject}
                    onChange={this.handleInputs} name="subject" placeholder="Subject:" />
                <textarea name="message" value={this.state.newMailContent.message}
                    onChange={this.handleInputs} placeholder="Message:" cols="30" rows="10"></textarea>
            </div>
            <div className="send-and-trash-container">
                <button className="send-btn" onClick={() => onSendMail(this.state.newMailContent, false)}>Send</button>
                {/* <i className="fa fa-trash" onClick={() => onRemove(mailId)}></i> */}
                <i className="fa fa-file-text" onClick={() => onSendMail(this.state.newMailContent, true)}></i>
            </div>
        </section>
    }
}