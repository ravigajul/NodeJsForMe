import yargs from "yargs"
import * as notes from "../notes-app/notes.js"

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
yargs.parse()