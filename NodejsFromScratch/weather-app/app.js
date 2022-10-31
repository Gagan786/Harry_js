const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
//request is a npm package
// const url =
//   "http://api.openweathermap.org/data/2.5/weather?lat=42.652781&lon=-78.755447&appid=1bba96c46e5a9c197e8d9ae144e0f070&units=imperial";
// //metric used here to get temperature in celcius.
// request(
//   {
//     url: url,
//     json: true,
//   },
//   (error, response) => {
//     // var data = JSON.parse(response.body); dont need to use it as json sets to true
//     if (error) {
//       console.log("unable to connect to Location services");
//     } else if (response.body.main == undefined) {
//       console.log(
//         "Unable to find the coordinates of location,Try another search"
//       );
//     } else {
//       console.log(
//         `${response.body.weather[0].description}. It is currently ${response.body.main.temp} degrees out.It feels like ${response.body.main.feels_like} degress out.`
//       );
//     }
//   }
// );

//geocoding
//adress -> lang/lon -> weather

// Goal : Print the lat/long for Los Angeles.
// const geoCodeURL =
//   "http://api.positionstack.com/v1/forward?access_key=6b93bbab0c69fdbe22ddf6dec243894a&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC&limit=1";

// request({ url: geoCodeURL, json: true }, (error, response) => {

//   if (error) {
//     console.log("UNable to connect to Location services");
//   }
//   else if (response.body.data == undefined) {
//     console.log("Unable to find the location. Try another search");
//    }
//   else {
//     const longitude = response.body.data[0].longitude;
//     const latitude = response.body.data[0].latitude;
//     console.log(`${longitude}, ${latitude}`);
//     console.log(response.body);
//   }
// });
// 1600 % 20Pennsylvania % 20Ave % 20NW,% 20Washington % 20DC;
const address = process.argv[2];

if (!address) {
  console.log("address not provided");
}
else {
  const geoerror = geocode(address, (error, data) => {
    if (error) { return console.log(error); }
    // console.log("Coordinates data", data);
  
    forecast(data.latitude, data.longitude, (error, Data) => {
      if (error) {
        return console.log(error);
      }
      console.log("Forecast Data ", Data);
    });
  
  });
}


