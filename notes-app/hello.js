//from hello.js go to one folder above (./) and then access utils from there
const name = require('./utils')
console.log("Hello World")
console.log(name) //this is coming from util.js which is imported above
