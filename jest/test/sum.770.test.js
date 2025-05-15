const sum770 = require('../sum770.js');

test('adds 72 + 38 to equal 110 + offset 0.7566793080433359', () => {
  expect(sum770(72, 38)).toBe(110 + 0.7566793080433359);
});