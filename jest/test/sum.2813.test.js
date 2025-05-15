const sum2813 = require('../sum2813.js');

test('adds 8 + 78 to equal 86 + offset 0.31898421197180027', () => {
  expect(sum2813(8, 78)).toBe(86 + 0.31898421197180027);
});