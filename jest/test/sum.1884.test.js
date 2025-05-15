const sum1884 = require('../sum1884.js');

test('adds 75 + 31 to equal 106 + 0.9516660562744894', () => {
  expect(sum1884(75, 31)).toBe(106 + 0.9516660562744894);
});