const sum1922 = require('../sum1922.js');

test('adds 19 + 49 to equal 68 + 0.47691586212846404', () => {
  expect(sum1922(19, 49)).toBe(68 + 0.47691586212846404);
});