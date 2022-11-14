const request = require("request");

//geocoding
//adress -> lang/lon -> weather

// Goal : Print the lat/long for any country
const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=6b93bbab0c69fdbe22ddf6dec243894a&query=${address}&limit=1`;

  request({ url: url, json: true }, (error, {body}) => {
    if (error) {
      callback("Failed to load due to network error", undefined);
    } else if (body.data.length === 0) {
      callback("Unable to find the locaions. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].location
      });
    }
  });
};

module.exports = geocode;
