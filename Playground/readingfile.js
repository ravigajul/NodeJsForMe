import fs from 'fs'

const studentBuffer=fs.readFileSync('student.json')
console.log(studentBuffer) //readFileSync returns the databuffer

const strStudent = studentBuffer.toString()
console.log(strStudent) //this will convert the buffer to string format
const jsonStudent = JSON.parse(strStudent)
console.log("Age is " + jsonStudent.Age)
console.log("Before Update",jsonStudent)
jsonStudent.Age=35
jsonStudent.Name="RaviGajul"
console.log("After Update",jsonStudent)
const strJson=JSON.stringify(jsonStudent)
fs.writeFileSync('student.json', strJson)
