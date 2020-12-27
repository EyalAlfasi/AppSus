export const utilService = {
    makeId,
    getRandomIntInclusive,
    getShortText,
    timeStampToDateTime,
    getRandomColor,
    getNameInitials
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
    if (text.length < length) return text
    return text.substring(0, length) + '...'
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function timeStampToDateTime(timeStamp) {
    const dateTimeObj = new Date(timeStamp)
    const formattedDate = dateTimeObj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return formattedDate;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getNameInitials(name) {
    name = name.split(' ');
    const newName = name.map(word => word[0]).join('').toUpperCase();
    return newName;
}