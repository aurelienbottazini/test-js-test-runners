const sum3196 = require('../sum3196.js');

test('adds 8 + 50 to equal 58 + 0.991398145551315', () => {
  expect(sum3196(8, 50)).toBe(58 + 0.991398145551315);
});