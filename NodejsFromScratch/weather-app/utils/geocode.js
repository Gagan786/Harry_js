const request = require("request");

const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=6b93bbab0c69fdbe22ddf6dec243894a&query=${address}&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Failed to load due to network error", undefined);
    } else if (response.body.data.length === 0) {
      callback("Unable to find the locaions. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
      });
    }
  });
};

module.exports = geocode;
