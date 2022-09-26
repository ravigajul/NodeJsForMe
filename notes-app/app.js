import fs from 'fs';
import * as notes from './notes.js'
import validator from 'validator';
import chalk from 'chalk';
import yargs from 'yargs'
fs.writeFileSync('notes.txt', 'This is the first line written by nodejs');
fs.appendFileSync('notes.txt', '\nThis is appended line');
console.log(notes.getNotes());
console.log(validator.isEmail('ravi.gajul@test.com'));
console.log(validator.isURL('https://www.google.com'));
console.log(chalk.green("Hi There!"));
console.log(chalk.bgGreen("Hi there!"));

//console.log(process.argv)

yargs.version('1.1.0')
yargs.command({
    command: "add",
    describe: "To add notes",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "To remove notes",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNotes(argv.title,argv.body)
    }
})

yargs.command({
    command: "list",
    describe: "To list notes",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        console.log("Title:"+ argv.title)
        console.log("Body:"+ argv.body)
    }
})
yargs.command({
    command: "read",
    describe: "To read notes",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log("Title:"+ argv.title)
        console.log("Body:"+argv.body)
    }
})
//console.log(yargs.argv)
yargs.parse()




