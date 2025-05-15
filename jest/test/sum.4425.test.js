const sum4425 = require('../sum4425.js');

test('adds 33 + 99 to equal 132 + 0.5656539463482839', () => {
  expect(sum4425(33, 99)).toBe(132 + 0.5656539463482839);
});