const yargs = require('yargs');
const fs = require('fs');
const _ = require('lodash');

const note = require('./addingNote');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add','Add a new note',{
        title: titleOptions,
	body: bodyOptions
     })
     .help()
     .argv;

let command = argv._[0];

if (command === "add")
{
    note.addNote(argv.title,argv.body);
    console.log("Note successfully added\n");
}
