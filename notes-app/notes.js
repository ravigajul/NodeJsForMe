import fs, { readFileSync } from 'fs'
import chalk from 'chalk'
const getNotes = function () {
    return 'Your notes'
}
debugger
const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Notes Added!"))
    } else {
        console.log(chalk.red.inverse("Note already taken!!"))
    }


}
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function () {
    try {
        const dataBuffer = readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title !== title //return true to keep , return false to not keep it in duplicate notes
    })
    if(notes.length>duplicateNotes.length){
        console.log(chalk.green.inverse("Note Removed!"))
    }else{
        console.log(chalk.red.inverse("Note not found"))
    }

}

//exporting multiple functions
export { getNotes, addNotes, removeNotes }