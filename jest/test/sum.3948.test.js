const sum3948 = require('../sum3948.js');

test('adds 28 + 63 to equal 91 + offset 0.47511012255113283', () => {
  expect(sum3948(28, 63)).toBe(91 + 0.47511012255113283);
});