const sum4931 = require('../sum4931.js');

test('adds 18 + 29 to equal 47 + offset 0.9463154778702045', () => {
  expect(sum4931(18, 29)).toBe(47 + 0.9463154778702045);
});