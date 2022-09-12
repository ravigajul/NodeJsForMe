# NodeJsForMe

## Install Nodejs

<https://nodejs.org/en/>

## Set environment variables

NODE_HOME = C:\Program Files\nodejs\node_modules\npm
PATH = %NODE_HOMe%\bin

## Verify if node is successfully installed

```node
node --version
npm --version
```

## Create package.json for all dependencies

```node
npm init
```

## importing nodemodules

Some modules like console are available globally
others needs to be explicitly loaded

## require user defined modules

const name = require('./utils.js')
here require will import the variables or object exported in utils.js by modules.export=<variable/object> and assign it to variable name. This name can access the properties and methods of utils.js utility. Note the ./ indicating this is a user defined module and not a standard module from any of the libraries.

## validator package

for several string util functions like isEmail, isURL etc.

## Utility for Terminal String Styling

npm install chalk

## nodemon to automatically restart node application

install nodemon globally and run the app.js as nodemon app.js instead of node app.js. This will automatically refresh the terminal with latest output as soon as the changes are made/saved.

```node
npm install nodemon -g
```

## Get the argument value from commandline

process is a built in variable and argv is the argument vector.
process.argv results in an array[0]=location of node.exe array[1]=path of the file run, array[2] argument that we passed

```javascript
console.log(proces.argv[2])
//output
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\gajur\\Downloads\\NodeJsForMe\\notes-app\\app.js',
  'Ravi'
]
```

## Argument parsing through yargs

when you run the command node app.js remove, remove is passed as argument and print removing a note.
note: yargs.argv or yargs.parse() is needed for this customization to work.

```javascript
yargs.command({
    command: "remove",
    describe:"To remove notes",
    handler: function(){
        console.log("Removing a note")
    }
})
console.log(yargs.argv)
```

## forcing the user to pass title argument as a string type

the demandOptions in bundler object makes it mandatory to pass --title="sometitle" and the type property makes the data type mandate to string

```javascript
yargs.command({
    command: "add",
    describe:"To add notes",
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log("Adding a note",argv)
    }
})
```

## Parsing JSON Object

```javascript
JSON.stringify(jsonObject) //convert jsonobject to a string
JSON.parse(strJson) //convert string to a json object
```

## Exporting multiple functions from a .js file
```javascript
//exporting multiple functions
export { getNotes, addNotes }

//importing
import * as notes from './notes.js'
notes.getNotes
notes.addNotes
```

##  Filter method on Arrays
```javascript
const numbers = [1,2,3,4,5,6,7,8]
const evenNumbers = numbers.filter(function(n){
    return n%2 ==0 //number will be retained if this is true, will be removed if false
})
```

## Formatted print on console
```javascript
import chalk from 'chalk'
console.log(chalk.green.inverse("New Notes Added!"))
console.log(chalk.red.inverse("New Notes removed!"))
```