const fetchbreedNameDescription = require('./breedFetcher');
let breedName = process.argv.slice(2);

fetchbreedNameDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log('Description', desc);
  }
});