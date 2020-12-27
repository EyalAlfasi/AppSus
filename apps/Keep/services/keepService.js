import { utilService } from "../../../services/utilService.js"
import { storageService } from "../../../services/storageService.js"

const KEEP_KEY = 'keepDB';

export const keepService = {
    query,
    addNote,
    editNote,

}

function query() {
    return Promise.resolve(notes);

}

function getNoteById(noteId) {
    const note = notes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function remove(noteId) {
    notes = notes.filter(note => note.id !== noteId);
    _saveNotesToStorage()
}

function pinnedNote(selectedNote) {

    notes.forEach(note => {
            if (note.id === selectedNote.id) {
                note.isPinned = !note.isPinned
            }
            return note
        })
        // noteToChange[0].isPinned = !noteToChange[0].isPinned
    _saveNotesToStorage()
}

function toggleTodoMark(selectedNote) {
    selectedNote.isMarked = !selectedNote.isMarked
    _saveNotesToStorage()
}

function cloneNote(selectedNote) {

    var newNote = {...selectedNote }
    newNote.id = utilService.makeId()
    notes.push(newNote)
    _saveNotesToStorage()

}




function editNote(edit) {
    console.log(edit, 'lol');
    switch (edit.actionName) {
        case 'Remove':
            remove(edit.note.id)
            break;
        case 'Pinned':
            pinnedNote(edit.note)
            break;
        case 'Clone':
            cloneNote(edit.note)
            break;
        case 'Mark':
            toggleTodoMark(edit.note)
            break;
        default:
            edit.note.style.backgroundColor = edit.actionName
            break;

    }
    _saveNotesToStorage()
    return Promise.resolve()
}


function _saveNotesToStorage() {
    storageService.saveToStorage(KEEP_KEY, notes)
}

function addNote(note) {
    note = {...note }
    console.log(note, 'addnote');
    var newNote;
    switch (note.type) {
        case 'NoteText':
            newNote = {
                id: utilService.makeId(),
                type: "NoteText",
                isPinned: true,
                info: {
                    txt: note.noteInfo
                },
                style: {
                    backgroundColor: note.style
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
                    backgroundColor: note.style
                }
            }
            break;
        case 'NoteTodos':
            newNote = {
                id: utilService.makeId(),
                type: "NoteTodos",
                isPinned: false,
                isMarked: false,
                info: {
                    label: "TODO or not TODO?",
                    todos: [
                        { txt: "Do that", doneAt: new Date().toLocaleDateString() },
                        // { txt: "Do this", doneAt: new Date().toLocaleDateString() }
                    ]
                },
                style: {
                    backgroundColor: note.style,

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
                    backgroundColor: note.style
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
            txt: "Any fool can write code that a computer can understand. good programmers write code that humans can understand."
        },
        style: {
            backgroundColor: "#598eb3"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: true,
        isMarked: true,
        info: {
            label: "Todo List",
            todos: [
                { txt: "Sprint 3", doneAt: '26/12/2020' },
                // { txt: "Do this", doneAt: '12/12/2020' }
            ]
        },
        style: {
            backgroundColor: "#d7aefb"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Before software can be reusable it first has to be usable."
        },
        style: {
            backgroundColor: "#E6E6FA"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: true,
        info: {
            url: "https://media0.giphy.com/media/KPaJ8b9Ztkty0/200.gif",
            title: "Scotter first, AppSus after"
        },
        style: {
            backgroundColor: "#fb7756"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        isMarked: false,
        info: {
            label: "List",
            todos: [
                { txt: "Do that..", doneAt: '22/05/2020' },
                // { txt: "Do this", doneAt: '12/12/2020' }
            ]
        },
        style: {
            backgroundColor: "#b03c70"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: true,
        info: {
            url: "https://miro.medium.com/max/1634/0*r6iQzljiuJavVxRM",
            title: "Eat, Sleep, Code, Repeat"
        },
        style: {
            backgroundColor: "#fb569f"
        }
    },
    {
        id: utilService.makeId(),
        type: 'NoteVideo',
        isPinned: false,
        info: {
            url: 'https://www.youtube.com/embed/BRrrEjAvXkE',
            title: ''
        },
        style: {
            backgroundColor: '#4DE77B'
        }
    },

    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: true,
        isMarked: false,
        info: {
            label: "Let`s TODO it",
            todos: [
                { txt: "Do this..", doneAt: '22/05/2020' },
                // { txt: "", doneAt: '12/12/2020' }
            ]
        },
        style: {
            backgroundColor: "#b03c70"
        }
    },
    {
        id: utilService.makeId(),
        type: 'NoteVideo',
        isPinned: false,
        info: {
            url: 'https://www.youtube.com/embed/UIQ03GXhD2E',
            title: ''
        },
        style: {
            backgroundColor: '#fb7756'
        }
    },
];