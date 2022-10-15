const path = require('path')
console.log(__dirname) //C:\Users\rgajul\Downloads\NodeJsForMe\web-server\src
console.log(__filename) //C:\Users\rgajul\Downloads\NodeJsForMe\web-server\src\app.js
console.log(path.join(__dirname,'../')) //C:\Users\anjal\Downloads\NodeJsForMe\web-server\
console.log(path.join(__dirname,'../..')) //C:\Users\anjal\Downloads\NodeJsForMe
console.log(path.join(__dirname,'../public')) //C:\Users\anjal\Downloads\NodeJsForMe\web-server\public