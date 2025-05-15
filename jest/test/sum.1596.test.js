const sum1596 = require('../sum1596.js');

test('adds 24 + 78 to equal 102 + offset 0.37145729840637187', () => {
  expect(sum1596(24, 78)).toBe(102 + 0.37145729840637187);
});