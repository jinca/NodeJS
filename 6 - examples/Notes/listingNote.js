console.log("Starting listing modules\n");

const notes = require('./addingNote');
const fs = require('fs');

let getAll = () => {
    return notes.fetchNotes();
};


let getNote = (title) => {
    
    let notes = notes.fetchNotes();
    let filteredNote = notes.filter(n => n.title);
    return filteredNote[0];
};

let logNote = (note) => {
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    getAll,
    getNote,
    logNote
};
