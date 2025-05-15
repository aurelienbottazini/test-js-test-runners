const sum3071 = require('../sum3071.js');

test('adds 54 + 61 to equal 115 + offset 0.3616359585716763', () => {
  expect(sum3071(54, 61)).toBe(115 + 0.3616359585716763);
});