const sum116 = require('../sum116.js');

test('adds 66 + 53 to equal 119 + offset 0.5538872103022381', () => {
  expect(sum116(66, 53)).toBe(119 + 0.5538872103022381);
});