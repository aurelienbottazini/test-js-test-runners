const sum4983 = require('../sum4983.js');

test('adds 23 + 56 to equal 79 + 0.5849963724206027', () => {
  expect(sum4983(23, 56)).toBe(79 + 0.5849963724206027);
});