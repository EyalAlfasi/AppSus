import { storageService } from '../services/storageService.js';



export const KeepService = {
    query,

}



function query() {
    console.log(notes);
    return Promise.resolve(notes);

}

// _createNotes();

// function _createNotes() {
//     gNotes = _getDemoNotes()
// }

// function _getDemoNotes() {

var notes = [{
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
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
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: 187111111 },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];
// return notes
// }