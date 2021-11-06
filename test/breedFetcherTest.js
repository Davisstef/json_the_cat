const fetchBreedNameDescription = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedNameDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedNameDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  it('returns an error message for am invalid breed', (done) => {
    fetchBreedNameDescription('', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "Cat does not exist";
      assert.equal(expectedDesc, desc);
      done();
    });
  });
});