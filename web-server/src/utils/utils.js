import request from 'request'
const geoCode = (place, callback) => {
    const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +encodeURIComponent(place) +".json?access_token=pk.eyJ1IjoicmF2aWdhanVsIiwiYSI6ImNsMmo0YXBiczB1MTQzZm9qYmxobTFrM2cifQ.u2dvtrT8mDrIazg9Fup17Q&limit=1"
    request(geoCodeUrl, function (error, response, body) {
        //explicit json parsing
        const resp = JSON.parse(body)
        debugger
        if (error) {
            console.log("500 Internal Server error - Geocoding")
        } else if (response.body.error) {
            console.log("400-bad request - geocoding")
        } else if (resp.features.length === 0) {
            console.log("Place Doesnot exit")
        } else {

            const place_name = resp.features[0].place_name
            const center = resp.features[0].center
            debugger

            callback(center)
        }
    });

}
const getWeather = (coordinates, callback) => {
    const latitude = coordinates[1]
    const longitude = coordinates[0]
    const url = 'http://api.weatherstack.com/current?access_key=e84a396be35e4b7babdec9031b34365e&query=' + latitude + ',' + longitude
    //implicit json parsing
    debugger
    request({ url: url, json: true }, function (error, response, body) {
        if (error) {
            console.log('500 internal server error unable to connect to service ')
        } else if (response.body.error) {
            console.log('400 - Bad Request')
        } else {
            callback(response)
            }
    });
}

export { geoCode, getWeather }