const sum2803 = require('../sum2803.js');

test('adds 66 + 17 to equal 83 + offset 0.701798343674285', () => {
  expect(sum2803(66, 17)).toBe(83 + 0.701798343674285);
});