const sum3880 = require('../sum3880.js');

test('adds 66 + 64 to equal 130 + offset 0.49774616234394', () => {
  expect(sum3880(66, 64)).toBe(130 + 0.49774616234394);
});