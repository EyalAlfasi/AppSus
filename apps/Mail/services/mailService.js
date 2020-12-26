import { utilService } from "../../../services/utilService.js"
import { storageService } from "../../../services/storageService.js"
export const mailService = {
    query,
    removeMail,
    getMailById,
    sendMail,
    unDraftMail,
    getMailTypesCount,
    starMail
}

const MAILS_KEY = 'mailsDB'
var gMails;
_createMails();


function query() {
    return Promise.resolve(gMails);
}

function _createMails() {
    gMails = storageService.loadFromStorage(MAILS_KEY);
    if (!gMails || !gMails.length) {
        // Nothing in localStorage, use demo data
        gMails = _getDemoMails()
        storageService.saveToStorage(MAILS_KEY, gMails)
    }
}

function sendMail({ subject, message }, isDraft) {
    const newMail = {
        id: utilService.makeId(), senderEmailAddress: 'eyalalf@gmail.com', senderName: 'Eyal Alfasi', subject: subject,
        body: message,
        isInbox: isDraft ? false : true, isRead: false, isStarred: false, isSent: isDraft ? false : true,
        isDraft: isDraft ? true : false, isTrash: false, sentAt: Date.now(),
        backgroundColor: utilService.getRandomColor()
    }
    gMails.unshift(newMail);
    storageService.saveToStorage(MAILS_KEY, gMails)
    return Promise.resolve();
}


function removeMail(mailId) {
    const mail = gMails.find(mail => mail.id === mailId);
    if (mail.isTrash) {
        gMails = gMails.filter(mail => mail.id !== mailId);
    } else trashMail(mailId)
    storageService.saveToStorage(MAILS_KEY, gMails)
    return Promise.resolve();
}

function starMail(mailId) {
    const mailIdx = gMails.findIndex(mail => mail.id === mailId);
    gMails[mailIdx].isStarred = !gMails[mailIdx].isStarred
    storageService.saveToStorage(MAILS_KEY, gMails)
    return Promise.resolve();
}

function trashMail(mailId) {
    const mailIdx = gMails.findIndex(mail => mail.id === mailId);
    const mail = gMails[mailIdx]
    mail.isTrash = true;
    mail.isInbox = false;
    mail.isSent = false;
    mail.isDraft = false;
    mail.isStarred = false;
    storageService.saveToStorage(MAILS_KEY, gMails)
}

function unDraftMail(mailId) {
    const mailIdx = gMails.findIndex(mail => mail.id === mailId);
    const mail = gMails[mailIdx]
    mail.isDraft = false;
    mail.isInbox = true;
    storageService.saveToStorage(MAILS_KEY, gMails)
}

function getMailById(mailId) {
    const mail = gMails.find(mail => mail.id === mailId);
    return Promise.resolve(mail);
}

function getMailTypesCount() {
    const mailCounts = {
        inbox: 0,
        starred: 0,
        sent: 0,
        draft: 0,
        trash: 0
    }
    gMails.forEach(mail => {
        mail.isInbox && mailCounts.inbox++
        mail.isStarred && mailCounts.starred++
        mail.isSent && mailCounts.sent++
        mail.isDraft && mailCounts.draft++
        mail.isTrash && mailCounts.trash++
    });
    return mailCounts;
}

function _getDemoMails() {
    var mails = [
        {
            id: utilService.makeId(), senderEmailAddress: 'hello@spotify.com', senderName: 'Spotify Inc', subject: 'Spotify',
            body: 'Hey Eyal! here is a playlist just for you: https://open.spotify.com/playlist/6xGLprv9fmlMgeAMpW0x51',
            isInbox: true, isRead: false, isStarred: false, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594,
            backgroundColor: utilService.getRandomColor()
        },
        {
            id: utilService.makeId(), senderEmailAddress: 'daniel450ld@gmail.com', senderName: 'Daniel', subject: 'Hamburgers!',
            body: 'Want to go grab a bite?', isInbox: true, isRead: false, isStarred: false, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594,
            backgroundColor: utilService.getRandomColor()
        },
        {
            id: utilService.makeId(), senderEmailAddress: 'zuckerberg@facebook.com', senderName: 'Mark Zuckerberg', subject: 'Salery - Decmber 2020',
            body: 'Hey Eyal, I just sent you this months`s paycheck for 100,000$ you are a great employee!',
            isInbox: true, isRead: false, isStarred: false, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594,
            backgroundColor: utilService.getRandomColor()
        },
        {
            id: utilService.makeId(), senderEmailAddress: 'orthecop@gmail.com', senderName: 'Or the cop', subject: 'police',
            body: 'Did you know I just became a cop?!?!?!', isInbox: true, isRead: false, isStarred: false, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594,
            backgroundColor: utilService.getRandomColor()
        },
        {
            id: utilService.makeId(), senderEmailAddress: 'evia@gmail.com', senderName: 'Eviatar', subject: 'Wassap?',
            body: 'Pick up!', isInbox: true, isRead: false, isStarred: false, isSent: false, isDraft: false, isTrash: false, sentAt: 1551133930594,
            backgroundColor: utilService.getRandomColor()
        }
    ]

    return mails;
}

