const sum490 = require('../sum490.js');

test('adds 37 + 86 to equal 123 + offset 0.746196142956675', () => {
  expect(sum490(37, 86)).toBe(123 + 0.746196142956675);
});