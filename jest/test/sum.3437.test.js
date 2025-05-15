const sum3437 = require('../sum3437.js');

test('adds 23 + 59 to equal 82 + 0.3805124486724566', () => {
  expect(sum3437(23, 59)).toBe(82 + 0.3805124486724566);
});