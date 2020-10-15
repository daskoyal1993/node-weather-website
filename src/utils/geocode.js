const request = require('request')

// const geocode = (address,callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGFza295YWwiLCJhIjoiY2tnMjV2Z2oyMGVrZjJycGFldmZ3Zmh0dCJ9.Q9AF6UJ7Ys-k3exh1DXx9A'
//     request({url:url,json:true},(error,response) => {
//        if(error){
//          callback('Unable to connect to location service!',undefined)
//        } else if(response.body.features.length === 0){
//          callback('unable to find location, Try another search.',undefined)
//        } else{
//          callback(undefined,{
//           latitude: response.body.features[0].center[1],
//           longitude: response.body.features[0].center[0],
//           location:response.body.features[0].place_name
  
//          })
//        }
  
//     })
//   }

const geocode = (address,callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGFza295YWwiLCJhIjoiY2tnMjV2Z2oyMGVrZjJycGFldmZ3Zmh0dCJ9.Q9AF6UJ7Ys-k3exh1DXx9A'
  request({url,json:true},(error,{body}) => {
     if(error){
       callback('Unable to connect to location service!',undefined)
     } else if(body.features.length === 0){
       callback('unable to find location, Try another search.',undefined)
     } else{
       callback(undefined,{
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location:body.features[0].place_name

       })
     }

  })
}
module.exports = geocode
  