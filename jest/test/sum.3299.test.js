const sum3299 = require('../sum3299.js');

test('adds 82 + 67 to equal 149 + 0.9995160707418882', () => {
  expect(sum3299(82, 67)).toBe(149 + 0.9995160707418882);
});