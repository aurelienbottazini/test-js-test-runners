const sum2158 = require('../sum2158.js');

test('adds 7 + 35 to equal 42 + offset 0.15289895651428242', () => {
  expect(sum2158(7, 35)).toBe(42 + 0.15289895651428242);
});