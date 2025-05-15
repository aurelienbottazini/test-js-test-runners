const sum990 = require('../sum990.js');

test('adds 92 + 15 to equal 107 + 0.9284653819221128', () => {
  expect(sum990(92, 15)).toBe(107 + 0.9284653819221128);
});