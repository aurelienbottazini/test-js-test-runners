const sum1465 = require('../sum1465.js');

test('adds 77 + 45 to equal 122 + offset 0.06037768552340461', () => {
  expect(sum1465(77, 45)).toBe(122 + 0.06037768552340461);
});