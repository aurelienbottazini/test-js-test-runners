const sum1037 = require('../sum1037.js');

test('adds 47 + 84 to equal 131 + offset 0.19212240829829175', () => {
  expect(sum1037(47, 84)).toBe(131 + 0.19212240829829175);
});