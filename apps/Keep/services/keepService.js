import { utilService } from "../../../services/utilService.js"
import { storageService } from "../../../services/storageService.js"


export const KeepService = {
    query,

}

var gNotes

function query() {
    console.log(gNotes);
    return Promise.resolve(gNotes);

}

_createNotes();

function _createNotes() {
    gNotes = _getDemoNotes()
}

function _getDemoNotes() {

    var notes = [{
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: "NoteImg",
            isPinned: true,
            info: {
                url: "http://some-img/me",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: "NoteTodos",
            isPinned: true,
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: 187111111 },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: 'NoteVideo',
            isPinned: false,
            info: {
                url: 'https://www.youtube.com/watch?v=vmAaVgUzNh8',
                title: 'speacial title'
            },
            style: {
                backgroundColor: 'yellow'
            }
        }
    ];
    return notes
}

function getById(noteId) {
    const note = gNotes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function remove(noteId) {
    gNotes = gNotes.filter(note => note.id !== noteId);
    _saveNotesToStorage()
    return Promise.resolve();
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}