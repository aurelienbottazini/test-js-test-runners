const sum3336 = require('../sum3336.js');

test('adds 71 + 62 to equal 133 + offset 0.3719177587010073', () => {
  expect(sum3336(71, 62)).toBe(133 + 0.3719177587010073);
});