const sum4587 = require('../sum4587.js');

test('adds 5 + 98 to equal 103 + 0.09396194551280157', () => {
  expect(sum4587(5, 98)).toBe(103 + 0.09396194551280157);
});