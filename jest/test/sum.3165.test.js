const sum3165 = require('../sum3165.js');

test('adds 82 + 42 to equal 124 + offset 0.6739991992377876', () => {
  expect(sum3165(82, 42)).toBe(124 + 0.6739991992377876);
});