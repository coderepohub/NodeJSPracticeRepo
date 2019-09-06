const yargs = require('yargs')
const notes= require('./notes.js')
yargs.version('1.0.0')
yargs.command({
    command:'add',
    describe: 'Add Notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove Notes',
    builder:{
        title:{
            describe:'title of note to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
        //console.log('remove notes for title '+argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'List all saved notes',
    handler(){
        notes.listNotes();
    }
})
yargs.command({
    command:'read',
    describe:'Read Notes on Title',
    builder:{
        title:{
            describe:'title of note to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
