const sum3304 = require('../sum3304.js');

test('adds 94 + 29 to equal 123 + 0.0828290787880106', () => {
  expect(sum3304(94, 29)).toBe(123 + 0.0828290787880106);
});