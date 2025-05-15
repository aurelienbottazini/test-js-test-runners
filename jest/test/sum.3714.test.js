const sum3714 = require('../sum3714.js');

test('adds 34 + 74 to equal 108 + offset 0.4262999925530033', () => {
  expect(sum3714(34, 74)).toBe(108 + 0.4262999925530033);
});