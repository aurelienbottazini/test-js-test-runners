const sum1526 = require('../sum1526.js');

test('adds 55 + 53 to equal 108 + 0.9071888838230906', () => {
  expect(sum1526(55, 53)).toBe(108 + 0.9071888838230906);
});