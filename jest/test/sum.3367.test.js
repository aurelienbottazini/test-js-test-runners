const sum3367 = require('../sum3367.js');

test('adds 49 + 84 to equal 133 + offset 0.16632503415205602', () => {
  expect(sum3367(49, 84)).toBe(133 + 0.16632503415205602);
});