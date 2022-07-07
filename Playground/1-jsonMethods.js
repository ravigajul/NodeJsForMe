const student={
    Name:"Ravi",
    Age:"24",
    Email:"Ravi@Test.com"
}

const strStudent = JSON.stringify(student) 
console.log(strStudent)
console.log(strStudent.Email) //this will be undefined as it is a string and not a json object

const objStudent=JSON.parse(strStudent)
console.log(objStudent)
console.log(objStudent.Email) //this will return email as it is a json object.

