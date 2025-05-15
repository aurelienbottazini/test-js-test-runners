const sum2447 = require('../sum2447.js');

test('adds 5 + 13 to equal 18 + 0.16206097923358742', () => {
  expect(sum2447(5, 13)).toBe(18 + 0.16206097923358742);
});