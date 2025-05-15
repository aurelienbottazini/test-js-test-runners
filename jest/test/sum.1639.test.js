const sum1639 = require('../sum1639.js');

test('adds 28 + 41 to equal 69 + offset 0.2649475791621616', () => {
  expect(sum1639(28, 41)).toBe(69 + 0.2649475791621616);
});