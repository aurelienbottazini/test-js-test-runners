const sum1800 = require('../sum1800.js');

test('adds 16 + 31 to equal 47 + 0.6724722194205305', () => {
  expect(sum1800(16, 31)).toBe(47 + 0.6724722194205305);
});