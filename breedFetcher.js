const request = require('request');

const fetchbreedNameDescription = function(breedName, callback) { 
  
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
  if (body) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not defined.');
      callback(error, 'Breed not defined');
    } else {
      let summary = data[0].description;
      callback(error, summary);
    }
  }
});
};

module.exports = fetchbreedNameDescription;