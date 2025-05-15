const sum2359 = require('../sum2359.js');

test('adds 61 + 1 to equal 62 + 0.7420677105871594', () => {
  expect(sum2359(61, 1)).toBe(62 + 0.7420677105871594);
});