const sum2243 = require('../sum2243.js');

test('adds 31 + 63 to equal 94 + 0.9749732064921407', () => {
  expect(sum2243(31, 63)).toBe(94 + 0.9749732064921407);
});