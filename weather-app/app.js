const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=e84a396be35e4b7babdec9031b34365e&query=40.7831,-73.9712'
//implicit json parsing
request({ url: url, json: true }, function (error, response, body) {
    if (error) {
        console.log('500 internal server error unable to connect to service ')
    } else if (response.body.error) {
        console.log('400 - Bad Request')
    } else {
        const temp = response.body.current.temperature
        const precip = response.body.current.precip
        console.log("The current temperature is " + temp + ' and the probability of rain is ' + precip)
    }
});

const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmF2aWdhanVsIiwiYSI6ImNsMmo0YXBiczB1MTQzZm9qYmxobTFrM2cifQ.u2dvtrT8mDrIazg9Fup17Q&limit=1"

//explicit json parsing
request(geoCodeUrl, function (error, response, body) {
    const resp = JSON.parse(body)
    debugger
    if (error) {
        console.log("500 Internal Server error - Geocoding")
    } else if (response.body.error) {
        console.log("400-bad request - geocoding")
    } else if (resp.features.length === 0) {
        console.log("Place Doesnot exit")
    } else{
        
    const place_name = resp.features[0].place_name
    const center = resp.features[0].center
    debugger
    console.log("The Place name is " + place_name)
    console.log("Latitude: " + center[0] + " Longitude: " + center[1])
}
});
