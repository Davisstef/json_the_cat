const { fetchbreedNameDescription } = require('./breedNameFetcher');
const breedName = process.argv[2];

fetchbreedNameDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log('Description', desc);
  }
});