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


//6. Default naming in function parameters Nodejs is print when that argument value is passed.
// TestCourse which default is printed when no argument is passed.
const print=(course="TestCourse")=>{
    console.log("Hi There " + course)
}
print("Nodejs")
print()

//7. Destructing an empty object passed while calling the function
//Here undefined object is referenced when no object is passed while calling and doesn't lead to exception
//trouser object is destructured when trouser object is passed. 
//when no object is passed city is defaulted to texas and make to undefined as we are destructing empty object.
const trouser = {
    make: "AmericanEagle",
    location:"Buckhead",
    city:"Atlanta",
    State:"Georgia"
}

const dress = (transaction,{make,city="Texas"}={})=>{
    console.log(transaction + " "+make+" " + "at " + city)
}
dress("purchase")
dress("purchase",trouser)