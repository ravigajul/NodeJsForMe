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
## Clean npm cache
```node
npm cache clean --force
```
## importing nodemodules

Some modules like console are available globally
others needs to be explicitly loaded

## require user defined modules
```javascript
const name = require('./utils.js')
//here require will import the variables or object exported in utils.js by modules.export=<variable/object> and assign it to variable name.
//This name can access the properties and methods of utils.js utility. 
//Note the ./ indicating this is a user defined module and not a standard module from any of the libraries.
```
## validator package

for several string util functions like isEmail, isURL etc.

## Utility for Terminal String Styling
```javascript
npm install chalk
import chalk from 'chalk'
console.log(chalk.green.inverse("New Notes Added!"))
console.log(chalk.red.inverse("New Notes removed!"))
```

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
console.log(chalk.green.inverse("This will print in green back ground"))
console.log(chalk.red.inverse("This will print in red back ground"))
```

## Different ways for writing the same arrow function using arrow functions
```javascript
getTasksToDo() 
{
    const tasksToDo = this.tasks.filter((task)=>{
    return task.completed === false
     })
    return tasksToDo
} 
//Equivalent arrow function for the above 
getTasksToDo() {
    return  this.tasks.filter((task)=>{
    return task.completed === false
    })
//Short Hand Arrow function of the same
getTasksToDo(){
  return this.tasks.filter((task)=> task.completed === false
}        
```

## Debugging
Write the keyword debugger where ever you want the code to hault
Run the programe using 
```javascript
node inspect app.js add --title="testing" --body="testing"
or
node --inspect-brk app.js add --title="testing" --body="testing"
```
This will start the program in debug mode. Open chrome and launch chrome://inspect page
Wait for few seconds and click on the inspect link. This will open the developer console in debugger mode for further debugging.

## Generate package.json with default values
```javascript
npm init -y
```

## passing values with special characters in url
This will convert for instance ? into %3F if ? is present in the address variable that we passed
```javascript
'https://www.example.com/'+ encodedURIComponent(address) + '/somethingelse'
```

## Callbacks
A callback function is a function as argument to some function that can be called at some point in the main function in order to avoid undefined values thrown by java script due to async nature of javascript execution.
```javascript
//here add function as three parameter x, y and callback is a function parameter which is called within setTimeout with (x+y) as parameter
const add = (x,y,callback)=>{    
    setTimeout(()=>{
        callback(x+y)
    },3000)
}

add(1,5,(error,sum)=>{
    console.log("The sum is " + sum)
})
```

## Express js for rendering pages or API responses
```java
Express.js for running a webserver
npm install express --save
const express = require('express')
const app = express()
//opening  port on the server to listen
app.listen(3000,()=>{
    console.log('The server is up and running in 3 seconds')
    console.log('open a browser and invoke localhost:3000/help')
})
/invoking just the domain
app.get('',(req,res)=>{
    res.send("Hi There!!")
})
//invoking a resource
app.get('/help',(req,res)=>{
    res.send('Please reach me at 905-204-6524')
})
```

## Folder Navigation or Path Manipulation
In this case, the line of code is constructing a file path by starting with the directory name of the current module (__dirname), and then appending '../public' to it. The '../public' part of the path is a relative path, which means it specifies a path relative to the current directory. The .. part of the relative path indicates that we want to move up one directory from the current directory, and the /public part of the relative path specifies that we want to access the public directory within that parent directory
```javascript
const path = require('path')
console.log(__dirname) //C:\Users\rgajul\Downloads\NodeJsForMe\web-server\src
console.log(__filename) //C:\Users\rgajul\Downloads\NodeJsForMe\web-server\src\app.js
console.log(path.join(__dirname,'../')) //C:\Users\anjal\Downloads\NodeJsForMe\web-server\
console.log(path.join(__dirname,'../..')) //C:\Users\anjal\Downloads\NodeJsForMe
console.log(path.join(__dirname,'../public')) //C:\Users\anjal\Downloads\NodeJsForMe\web-server\public
```
## Fix for issue with __dirname & __filename with ES6

```javascript
//to fix the __dirname issue with ES6 module
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

## Serving Static html page as the main page from public folder
The static html files are expected to be present in public folder at root level
```javascript
//serving static html as the main page localhost:3000 or localhost:3000/index.html
app.use(express.static(path.join(__dirname,'../public')))
```

## Render dynamic content
Handle bars is used to render dynamic content in collaboration with express.hbs is the package that works well with express js.
1. Install hbs app.set to view engine-hbs.
2. Create a index.hbs file at root level inside views folder
3. Use res.render to see the dyanamic content. Within the .hbs file bind the variable using hbs syntax {{}}
```javascript
npm install hbs
app.set('view engine','hbs')
app.get('',(req,res)=>{
    res.render('index',{
        title: "This is from hbs file",
        para: "This is a paragraph"
    })
})
```

## Customize Views Directory to have different name like templates
```javascript
const viewsPath = path.join(__dirname,"../templates")
app.set('views',viewsPath)
```

## Partials for templating web pages
1. Load hbs
2. Create two directories templates/partials, templates/views
3. Change views Path for the .hbs files to render correctly
4. Create partials path using path.join
5. register partials to partials path using hbs
6. create a new file in partials for header call it header.hbs
7. header.hbs is not a complete html document but part of a web page
8. Render a partial in main index.hbs file {{>header}}
9. nodemon doesn't restart for changes in .hbs. Hence run nodemon with a flag
    nodemon .\src\apps.js -e js, hbs
```javascript
const hbs = require('hbs')
const partialsPath = Path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath)
{{>header}} in main .hbs files where header needs to be loaded
{{>footer}} in main .hbs files where footer needs to be laoded
```

## Configure 404 Page not found

This should be last followed by other end points as the server checks for relevant webpages or end points in sequence of their occurence
```javascript
app.get('/*',(req,res)=>{
    res.render('404',{
        code : '404',
        message: 'Page not found',
        name: "Created by Ravi Gajul"
    })
})
```

## Using the query params from url
```javascript
app.get('/weather', (req, res) => {
    if(!req.query.search){
        return res.send('Please provide a search term')
    }
    console.log(req.query)
    res.send(
        {
            "location": req.query.search,
            "temperature": "26 degrees"
        }
    )
})
```

## ES-6 Objects and destructuring
### 1. When property and its value are same, we can just use property (shorthand syntax)
```javascript
const name ="RaviGajul"
const userAge = "30"
const user = {
    name,
    age:userAge,
    email:"Ravi.Gajul@yahoo.com"
}
console.log(user)
```

### 2. Destructuring the object properties
```javascript
//This makes us write multiple lines to extract a property's value. 
//This is not good when there are too many properties as we end up writing mulitple lines
const uName= user.name
const uAge = user.age
const uEmail =user.email
console.log(user.name)
console.log(user.age)
console.log(user.email)
```

### 3. Alternate approach to retrieve just age and email from user object
```javascript
const {age, email} = user
console.log(age, email)
```
### 4. Rename a property while extracting
```javascript
const {name: newName, age:newAge, email:newEmail} = user
console.log(newName,newAge,newEmail)
```

### 5. Destructing with function arguments
```javascript
const addName=(what,{name,age,email})=>{
    console.log(what, email, age, name)
}
addName('AddName',user)
```

### 6. Default function parameter values
```javascript
//6. Default naming in function parameters Nodejs is print when that argument value is passed.TestCourse which default is printed when no argument is passed.
const print=(course="TestCourse")=>{
    console.log("Hi There " + course)
}
print("Nodejs")
print()
```

### 7. Destructing an empty object passed while calling the function
```javascript
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
dress("purchase") //purchase undefined at Texas
dress("purchase",trouser) //purchase AmericanEagle at Atlanta
```

## Fetch API    
Fetch API to be used on client side java scripting to render or read different html elements

## Deployment
```java script
Install Heroku cli
heroku -v
heroku login
Enter any key except key to login to heroku 
Set up git hub account and add ssh key to github
add the project to git hub
heroku  keys:add
heroku create gajul-weather-app
Live url and repo url on heroku
https://gajul-weather-app.herokuapp.com/ | https://git.heroku.com/gajul-weather-app.git
Update package.json to have the script to run
 "scripts": {
    "start":"node ./web-server/src/app.js"
  }
//Make below changes in app.js
//to get the port number from heroku. Or condition to default to 3000 if it exists
const port = process.env.PORT || 3000
//opening  port on the server to listen
app.listen(PORT, () => {
    console.log('The server is up and running in 3 seconds')
    console.log('open a browser and invoke localhost:' + PORT + '/help')
})
update the app.js in js folder to refer to heroku url
git push origin master //for git hub
git push heroku master //for heroku
```

## Dev Dependency.
Modules installed as dev dependencies like nodemon may fail when trying to execute the nodemon command as is. However, it works if globally installed. Also, it works if we run it as npm run <scriptname>. Scriptname is the name given in scripts attribute of package.json file.

//Promise Chaining. The below then is executed when add function is resolved
add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum,2)
    //the below then will execute when the above add fn is resolved
}).then((sum2)=>{
    console.log(sum2)
    //Just one catch unlike above example would suffice and no deep nesting like above example
}).catch((e)=>{
    console.log(e)
})
```
## References
https://github.com/andrewjmead<br>
https://expressjs.com/<br>
https://www.npmjs.com/package/mongoose<br>
https://mongoosejs.com/docs/index.html<br>
