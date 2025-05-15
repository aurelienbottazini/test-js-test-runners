const sum1963 = require('../sum1963.js');

test('adds 80 + 95 to equal 175 + offset 0.18063343544571242', () => {
  expect(sum1963(80, 95)).toBe(175 + 0.18063343544571242);
});