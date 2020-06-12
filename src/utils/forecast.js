const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=066c559a7996e01dab7ab5a61cbc4b13&query= ' + latitude + ',' + longitude + '&units=m'

    request({url , json: true} , (error, {body}) => {
        if ( error) {
                callback('unable to connect to weather services', undefined)
        } else if(body.error) {
            callback('unable to find location' , undefined)
        } else {
            callback(undefined, 
                console.log(body.current.weather_descriptions[0] + '.Its currently ' + body.current.temperature + ' out but it feels like ' + body.current.feelslike + ' degrees out. The wind speed today is '+body.current.wind_speed + 'and the wind degree today is' +body.current.wind_degree)
            )
        }
    })
}
module.exports = forecast