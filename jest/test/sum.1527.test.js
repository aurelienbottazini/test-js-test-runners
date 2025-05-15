const sum1527 = require('../sum1527.js');

test('adds 30 + 90 to equal 120 + offset 0.7529068491604392', () => {
  expect(sum1527(30, 90)).toBe(120 + 0.7529068491604392);
});