const sum1785 = require('../sum1785.js');

test('adds 63 + 4 to equal 67 + offset 0.3579863249741563', () => {
  expect(sum1785(63, 4)).toBe(67 + 0.3579863249741563);
});