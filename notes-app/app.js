import fs from 'fs';
import getNotes from'./notes.js';
import validator from 'validator';
import chalk from 'chalk';
fs.writeFileSync('notes.txt','This is the first line written by nodejs');
fs.appendFileSync('notes.txt','\nThis is appended line');
console.log(getNotes());
console.log(validator.isEmail('ravi.gajul@test.com'));
console.log(validator.isURL('https://www.google.com'));
console.log(chalk.green("Hi There!"));
console.log(chalk.bgGreen("Hi there!"));



