const sum2365 = require('../sum2365.js');

test('adds 1 + 40 to equal 41 + 0.4134503618821582', () => {
  expect(sum2365(1, 40)).toBe(41 + 0.4134503618821582);
});