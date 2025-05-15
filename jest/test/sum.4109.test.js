const sum4109 = require('../sum4109.js');

test('adds 22 + 30 to equal 52 + 0.9413514763340912', () => {
  expect(sum4109(22, 30)).toBe(52 + 0.9413514763340912);
});