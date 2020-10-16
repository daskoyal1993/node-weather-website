const request = require('request')

// const forecast = (latitude,longitude,callback) => {
//    const url = 'http://api.weatherstack.com/current?access_key=84815a62844c876aa52c88468c036e33&query='+latitude+','+longitude+'8&units=m'
//    request({url:url,json:true}, (error,response) => {
//        if(error){
//            callback('Unable to connect to weather service!',undefined)
//        } else if(response.body.error) {
//            callback('Unable to find location,Try another search',undefined)
//        } else {
//         //console.log('It is currently '+response.body.current.temperature+' degree out. It feels like '+response.body.current.feelslike +' degree out.')
//         //console.log(response.body.current.weather_descriptions[0])

//         callback(undefined, 
//             response.body.current.weather_descriptions[0]+
//             'It is currently '+response.body.current.temperature+' degree out. It feels like '+
//              response.body.current.feelslike +' degree out.'

//         )

//        }

//    })


// }

 
const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=84815a62844c876aa52c88468c036e33&query='+latitude+','+longitude+'8&units=m'
    request({url,json:true}, (error,{body}) => {
        if(error){
            callback('Unable to connect to weather service!',undefined)
        } else if(body.error) {
            callback('Unable to find location,Try another search',undefined)
        } else {
            //console.log(body.current.weather_descriptions[0])
            //console.log(body.current.temperature)
         //console.log('It is currently '+body.current.temperature+' degree out. It feels like '+body.current.feelslike +' degree out.')
         //console.log(body.current.weather_descriptions[0])
 
         callback(undefined, 
             body.current.weather_descriptions[0]+ 
             
             'It is currently '+body.current.temperature+' degree out. It feels like '+
              body.current.feelslike +' degree out.'
 
         )
 
        }
 
    })
 
 
 }

module.exports = forecast
