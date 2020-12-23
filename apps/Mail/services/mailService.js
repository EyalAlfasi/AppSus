import { utilService } from "../../../services/utilService.js"
import { storageService } from "../../../services/storageService.js"
export const mailService = {
    query,
    removeMail,
    getMailById
}

const MAILS_KEY = 'mailsDB'


function query() {
    return Promise.resolve(mails);
}


function removeMail(mailId) {
    console.log('hi');
    mails = mails.filter(mail => mail.id !== mailId);
    storageService.saveToStorage(MAILS_KEY,mails)
    return Promise.resolve();
}

function getMailById(mailId) {
    const mail = mails.find(mail => mail.id === mailId);
    return Promise.resolve(mail);
}

var mails = [
    {
        id: utilService.makeId(), senderEmailAddress: 'hello@spotify.com', senderName: 'Spotify Inc', subject: 'Spotify',
        body: 'Hey Eyal! here is a playlist just for you: https://open.spotify.com/playlist/6xGLprv9fmlMgeAMpW0x51',
        isRead: false, sentAt: 1551133930594
    },
    {
        id: utilService.makeId(), senderEmailAddress: 'daniel450ld@gmail.com', senderName: 'Daniel', subject: 'Hamburgers!',
        body: 'Want to go grab a bite?', isRead: true, sentAt: 1551133930594
    },
    {
        id: utilService.makeId(), senderEmailAddress: 'zuckerberg@facebook.com', senderName: 'Mark Zuckerberg', subject: 'Salery - Decmber 2020',
        body: 'Hey Eyal, I just sent you this months`s paycheck for 100,000$ you are a great employee!',
        isRead: false, sentAt: 1551133930594
    },
    {
        id: utilService.makeId(), senderEmailAddress: 'orthecop@gmail.com', senderName: 'Or the cop', subject: 'police',
        body: 'Did you know I just became a cop?!?!?!', isRead: false, sentAt: 1551133930594
    },
    {
        id: utilService.makeId(), senderEmailAddress: 'evia@gmail.com', senderName: 'Eviatar', subject: 'Wassap?',
        body: 'Pick up!', isRead: false, sentAt: 1551133930594
    },
]