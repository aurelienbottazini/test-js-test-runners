const sum3947 = require('../sum3947.js');

test('adds 14 + 76 to equal 90 + offset 0.9667594535438163', () => {
  expect(sum3947(14, 76)).toBe(90 + 0.9667594535438163);
});