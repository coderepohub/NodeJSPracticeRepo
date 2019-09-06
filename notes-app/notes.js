const fs  = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return "My Notes "
}

const addNotes=(title,body)=>{
    const notes = loadData();
    const duplicateNote = notes.find((note)=> note.title===title)
    debugger
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveData(notes)
        console.log(chalk.green.inverse('Notes Added!'))
    }else{
        console.log(chalk.red.inverse('Notes with title '+ title+' already exist!'))
    }
   
}

const removeNotes = (title)=>{
    const storedData = loadData()
    const filteredStoredData = storedData.filter((x)=>{return x.title!==title})
    if(filteredStoredData.length<storedData.length){
        saveData(filteredStoredData)
        console.log(chalk.green.inverse('Notes Removed!'))
    }else{
        console.log(chalk.red.inverse('Notes with title - '+title+' does not exist'))
    }
}

const loadData = ()=>{
    try{
        const notesBufferedData = fs.readFileSync('Notes.json')
        const notesData = notesBufferedData.toString()
        return JSON.parse(notesData)
    }catch(ex){
        return []
    }
}

const saveData = (notes)=>{
    fs.writeFileSync('Notes.json',JSON.stringify(notes))
    
}

//LIST NOTES
const listNotes = ()=>{
    try{
       const loadAllNotes = loadData()
       loadAllNotes.forEach(element => {
           console.log(chalk.green.inverse('Title ')+element.title+chalk.green.inverse('\tBody ')+element.body+'\n')

       });
    }catch(ex){
        return[]
    }
}

//READ A NOTE FROM TITLE
const readNote = (titleArg)=>{
    var notes = loadData()
    var getNote = notes.find((note)=>note.title===titleArg)
    if(getNote){
        console.log(chalk.green.inverse(getNote.title))
        console.log(getNote.body+'\n')
    }else{
        console.log(chalk.red.inverse('Note with title '+titleArg+' not found'))
    }
    
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}