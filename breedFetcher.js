const request = require('request');

const fetchbreedNameDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, "No cat exists");
      } else {
        console.log(data[0].description);
      }
    }
  });
};

module.exports = { fetchbreedNameDescription };