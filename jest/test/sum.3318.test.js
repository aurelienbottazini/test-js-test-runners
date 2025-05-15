const sum3318 = require('../sum3318.js');

test('adds 68 + 56 to equal 124 + 0.009187368720902422', () => {
  expect(sum3318(68, 56)).toBe(124 + 0.009187368720902422);
});