const sum1965 = require('../sum1965.js');

test('adds 29 + 67 to equal 96 + 0.09977030721944247', () => {
  expect(sum1965(29, 67)).toBe(96 + 0.09977030721944247);
});