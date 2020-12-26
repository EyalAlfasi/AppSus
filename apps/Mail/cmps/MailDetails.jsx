import { MailCompose } from "./MailCompose.jsx"

export function MailDetails({ mail, onRemove, openComposer }) {

    function mailReply(mail) {
        openComposer(openComposer);
    }

    return <section className="mail-content-container">
        <h3>Subject: {mail.subject}</h3>
        <div className="mail-sender-details">
            <h4>From: {mail.senderName}</h4>
            <h5>&lt;{mail.senderEmailAddress}&gt;</h5>
        </div>
        <h5>{mail.body}</h5>
        <div className="mail-icons">
            <i className="fa fa-trash" onClick={() => onRemove(mail.id)}></i>
            {(!mail.isDraft && !mail.istrash) && <i className="fa fa-mail-reply" onClick={() => mailReply(mail)}></i>}
            {(mail.isDraft) && <i className="fa fa-file-excel-o"></i>}
            <i className="fa fa-plus"></i>
        </div>
    </section>
}

