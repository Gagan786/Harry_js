const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=1bba96c46e5a9c197e8d9ae144e0f070&units=imperial`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (response.body.list == undefined) {
      callback("Unable to track locaiton . Try another search", undefined);
    } else {
      callback(
        undefined,
        `${response.body.list[1].weather[0].description}. It is currently ${response.body.list[0].main.temp} degrees out.It feels like ${response.body.list[0].main.feels_like} degress out.`
      );
    }
  });
};
module.exports = forecast;
