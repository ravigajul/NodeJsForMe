const notes = []
//Adding items to array
notes.push({title:'Math',body:'hello'})
notes.push({title: 'Science',body:'body'})
console.log(notes)

const getNotes = notes.filter((note)=>{
    return note.body === 'hello'
})
console.log(getNotes)

