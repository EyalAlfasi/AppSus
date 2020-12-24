export const utilService = {
    makeId,
    getRandomIntInclusive,
    getShortText,
    timeStampToDateTime
}

function makeId(length = 8) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function getShortText(text, length) {
    return text.substring(0, length) + '...'
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function timeStampToDateTime(timeStamp) {
    const dateTimeObj = new Date(timeStamp)
    const formattedDate = dateTimeObj.toLocaleString();
    console.log(formattedDate);
    return formattedDate;
}