const sum3377 = require('../sum3377.js');

test('adds 25 + 95 to equal 120 + offset 0.09639080447581905', () => {
  expect(sum3377(25, 95)).toBe(120 + 0.09639080447581905);
});