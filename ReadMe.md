# NodeJs Quick Notes

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
others needs to explicitly loaded

## require user defined modules

const name = require('./utils.js')
here require will import the variables or object exported in utils.js by modules.export=<variable/object> and assign it to variable name. This name can access the properties and methods of utils.js utility. Note the ./ indicating this is a user defined module and not a standard module from any of the libraries.

## validator package

for several string util functions like isEmail, isURL etc.

## Utility for Terminal String Styling

npm install chalk

## nodemon to automatically restart node application

install nodemon globally and run the app.js as nodemon app.js instead of node.js. This will automatically refresh the terminal with latest output as soon as the changes are made/saved.

```node
npm install nodemon -g
```
