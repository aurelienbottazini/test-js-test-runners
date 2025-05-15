const sum2043 = require('../sum2043.js');

test('adds 27 + 20 to equal 47 + 0.9596924188817633', () => {
  expect(sum2043(27, 20)).toBe(47 + 0.9596924188817633);
});