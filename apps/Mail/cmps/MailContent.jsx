// import { utilService } from "../../../services/utilService"
export function MailContent({ mail, onRemove }) {

    return <section className="mail-content-container">
        <h3>Subject: {mail.subject}</h3>
        <div>
            <h4>From: {mail.senderName}</h4>
            <h5>&lt;{mail.senderEmailAddress}&gt;</h5>
        </div>
        <h5>{mail.body}</h5>
        <div className="mail-icons">
            <i className="fa fa-trash" onClick={() => onRemove(mail.id)}></i>
            <i className="fa fa-mail-reply"></i>
        </div>
    </section>
}