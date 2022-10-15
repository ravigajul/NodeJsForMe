import request from 'request'
import chalk from 'chalk'
import * as utils from './utils.js'
import yargs from 'yargs'

console.log(process.argv[2])
utils.geoCode(process.argv[2], (coordinates) => {
    console.log(chalk.bgGreen("Latitude: " + coordinates[0] + " Longitude: " + coordinates[1]))
    utils.getWeather(coordinates, resp => {
        const temp = resp.body.current.temperature
        const precip = resp.body.current.precip
        console.log(chalk.bgGreen("The current temperature is " + temp + ' and the probability of rain is ' + precip))
    })
})
