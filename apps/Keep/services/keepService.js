import { utilService } from "../../../services/utilService.js"
import { storageService } from "../../../services/storageService.js"

const KEEP_KEY = 'keepDB';

export const keepService = {
    query,
    addNote,
    remove,
    noteTextEdit

}

function query() {
    console.log(notes);
    return Promise.resolve(notes);

}

function getNoteById(noteId) {
    const note = notes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function remove(noteId) {
    notes = notes.filter(note => note.id !== noteId);
    _saveNotesToStorage()
    return Promise.resolve();
}

function noteTextEdit(noteInfo, noteId) {
    var noteCopy;
    getNoteById(noteId).then(note=> noteCopy = {...note})
    const noteIdx = notes.findIndex(note => note.id === noteId);
    _savePetsToStorage();
    return Promise.resolve(noteToUpdate);
}


function _saveNotesToStorage() {
    storageService.saveToStorage(KEEP_KEY, notes)
}

function addNote(note) {
    note = { ...note }
    console.log(note, 'addnote');
    var newNote;
    switch (note.type) {
        case 'NoteText':
            newNote = {
                id: utilService.makeId(),
                type: "NoteText",
                isPinned: false,
                info: {
                    txt: note.noteInfo
                },
                style: {
                    backgroundColor: "#00d"
                }
            }
            break;
        case 'NoteImg':
            newNote = {
                id: utilService.makeId(),
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: note.noteInfo,
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#00d"
                }
            }
            break;
        case 'NoteTodos':
            newNote = {
                id: utilService.makeId(),
                type: "NoteTodos",
                isPinned: false,
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: new Date().toLocaleDateString() },
                        { txt: "Do this", doneAt: new Date().toLocaleDateString() }
                    ]
                },
                style: {
                    backgroundColor: "#00d"
                }
            }
            const todos = note.noteInfo.split(',')
            todos.forEach((todo, idx) => {
                newNote.info.todos[idx].txt = todo;
            });
            break;
        case 'NoteVideo':
            var url = note.noteInfo.replace('watch?v=', 'embed/')
            newNote = {
                id: utilService.makeId(),
                type: 'NoteVideo',
                isPinned: false,
                info: {
                    url,

                    title: 'speacial title'
                },
                style: {
                    backgroundColor: 'yellow'
                }
            }
            break;

    }
    console.log(newNote);
    if (!notes) notes = [newNote]
    else notes.push(newNote)
    _saveNotesToStorage()
    return Promise.resolve()
}
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
    id: utilService.makeId(),
    type: "NoteImg",
    isPinned: true,
    info: {
        url: "https://media0.giphy.com/media/KPaJ8b9Ztkty0/200.gif",
        title: "Me playing Mi"
    },
    style: {
        backgroundColor: "#00d"
    }
},
{
    id: utilService.makeId(),
    type: "NoteTodos",
    isPinned: true,
    info: {
        label: "How was it:",
        todos: [
            { txt: "Do that", doneAt: '22/05/2020' },
            { txt: "Do this", doneAt: '12/12/2020' }
        ]
    },
    style: {
        backgroundColor: "#00d"
    }
},
{
    id: utilService.makeId(),
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