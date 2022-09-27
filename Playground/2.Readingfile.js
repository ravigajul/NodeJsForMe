import fs from 'fs'

const studentBuffer=fs.readFileSync('student.json')
console.log(studentBuffer) //readFileSync returns the databuffer

const strStudent = studentBuffer.toString() //this will convert the buffer to string format

console.log(strStudent)  //prints contents in string format
const jsonStudent = JSON.parse(strStudent) //converts string to jsonObject
console.log("Age is " + jsonStudent.Age) //prints using jsonpath
console.log("Before Update",jsonStudent) //prints the object before update
jsonStudent.Age=35
jsonStudent.Name="RaviGajul"
console.log("After Update",jsonStudent) //prints after update jsonobject
const strJson=JSON.stringify(jsonStudent) //converts object to string
fs.writeFileSync('student.json', strJson) //writes to jsonfile updated jsonstring
