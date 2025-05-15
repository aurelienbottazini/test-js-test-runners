const sum601 = require('../sum601.js');

test('adds 46 + 2 to equal 48 + offset 0.9289423959549494', () => {
  expect(sum601(46, 2)).toBe(48 + 0.9289423959549494);
});