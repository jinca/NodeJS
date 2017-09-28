console.log("Starting adding note modules\n");

const fs = require('fs');

let fetchNotes = () => {
    try{
        let NoteString = fs.readFileSync("notes-data.json");
	return JSON.parse(noteString);}
    catch(error){
	return [];
    }	    
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    
    let note = {
        title : title,
	body : body
    };

    let duplicatesNotes = notes.filter(n => n.title === title);

    if(duplicatesNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
    }
};
module.exports = {
    addNote
};

