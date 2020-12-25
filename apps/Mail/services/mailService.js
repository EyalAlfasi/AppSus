import { utilService } from "../../../services/utilService.js"
import { storageService } from "../../../services/storageService.js"
export const mailService = {
    query,
    removeMail,
    getMailById,
    sendMail
}

const MAILS_KEY = 'mailsDB'


function query() {
    return Promise.resolve(mails);
}

function sendMail({ subject, message }) {
    const newMail = {
        id: utilService.makeId(), senderEmailAddress: 'eyalalf@gmail.com', senderName: 'Eyal Alfasi', subject: subject,
        body: message,
        isInbox: true, isRead: false, isStarred: false, isSent: true, isDraft: false, isTrash: false, sentAt: Date.now()
    }
    mails.unshift(newMail);
    return Promise.resolve();
}


function removeMail(mailId) {
    const mail = mails.find(mail => mail.id === mailId);
    if (mail.isTrash) {
        mails = mails.filter(mail => mail.id !== mailId);
    } else trashMail(mailId)
    storageService.saveToStorage(MAILS_KEY, mails)
    return Promise.resolve();
}

function trashMail(mailId) {
    const mailIdx = mails.findIndex(mail => mail.id === mailId);
    const mail = mails[mailIdx]
    mail.isTrash = true;
    mail.isInbox = false;
    mail.isSent = false;
    mail.isDraft = false;
    mail.isStarred = false;
}

function draftMail(mailId) {
    const mailIdx = mails.findIndex(mail => mail.id === mailId);
    const mail = mails[mailIdx]
    mail.isDraft = true;
    mail.isInbox = false;
}

function getMailById(mailId) {
    const mail = mails.find(mail => mail.id === mailId);
    return Promise.resolve(mail);
}

var mails = [
    {
        id: utilService.makeId(), senderEmailAddress: 'hello@spotify.com', senderName: 'Spotify Inc', subject: 'Spotify',
        body: 'Hey Eyal! here is a playlist just for you: https://open.spotify.com/playlist/6xGLprv9fmlMgeAMpW0x51',
        isInbox: true, isRead: false, isStarred: false, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594
    },
    {
        id: utilService.makeId(), senderEmailAddress: 'daniel450ld@gmail.com', senderName: 'Daniel', subject: 'Hamburgers!',
        body: 'Want to go grab a bite?', isInbox: true, isRead: true, isStarred: true, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594
    },
    {
        id: utilService.makeId(), senderEmailAddress: 'zuckerberg@facebook.com', senderName: 'Mark Zuckerberg', subject: 'Salery - Decmber 2020',
        body: 'Hey Eyal, I just sent you this months`s paycheck for 100,000$ you are a great employee!',
        isInbox: true, isRead: false, isStarred: false, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594
    },
    {
        id: utilService.makeId(), senderEmailAddress: 'orthecop@gmail.com', senderName: 'Or the cop', subject: 'police',
        body: 'Did you know I just became a cop?!?!?!', isInbox: true, isRead: false, isStarred: true, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594
    },
    {
        id: utilService.makeId(), senderEmailAddress: 'evia@gmail.com', senderName: 'Eviatar', subject: 'Wassap?',
        body: 'Pick up!', isInbox: true, isRead: false, isStarred: false, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594
    }
]