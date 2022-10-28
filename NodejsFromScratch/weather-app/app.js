const request = require("request");
//request is a npm package
const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=32845785ef2e9fa3d05817058690203d&units=metric";
  //metric used here to get temperature in celcius.
request({
    url: url,
    json: true,
  },
  (error, response) => {
    // var data = JSON.parse(response.body); dont need to use it as json sets to true

    console.log(
      `${response.body.weather[0].description}. It is currently ${response.body.main.temp} degrees out.It feels like ${response.body.main.feels_like} degress out.`
    );
    })
  
    //geocoding
    //adress -> lang/lon -> weather

    // Goal : Print the lat/long for Los Angeles.
    
