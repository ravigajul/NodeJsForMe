//Object Property shorthand syntax
const name ="RaviGajul"
const userAge = "30"

// const name ="RaviGajul"
// const userAge = "30"
// const user = {
//     name : name,
//     age:userAge,
//     email:"Ravi.Gajul@yahoo.com"
// }
// console.log(user)

//1. When property and its value are same, we can just use property (shorthand syntax)
const user = {
    name,
    age:userAge,
    email:"Ravi.Gajul@yahoo.com"
}
console.log(user)

//2. Destructuring the object properties
//This makes us write multiple lines to extract a property's value. 
//This is not good when there are too many properties as we end up writing mulitple lines
const uName= user.name
const uAge = user.age
const uEmail =user.email
console.log(user.name)
console.log(user.age)
console.log(user.email)

//3. Alternate approach to retrieve just age and email from user object
const {age, email} = user
console.log(age, email)

//4. Rename a property while extracting
const {name: newName, age:newAge, email:newEmail} = user
console.log(newName,newAge,newEmail)

//5. Destructing with function arguments

const addName=(what,{name,age,email})=>{
    console.log(what, email, age, name)
}

addName('AddUser',user)