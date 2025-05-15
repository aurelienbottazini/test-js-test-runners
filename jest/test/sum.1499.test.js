const sum1499 = require('../sum1499.js');

test('adds 42 + 36 to equal 78 + offset 0.2641881035778144', () => {
  expect(sum1499(42, 36)).toBe(78 + 0.2641881035778144);
});