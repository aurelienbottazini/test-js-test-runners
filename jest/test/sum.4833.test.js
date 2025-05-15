const sum4833 = require('../sum4833.js');

test('adds 6 + 99 to equal 105 + offset 0.8133245868750881', () => {
  expect(sum4833(6, 99)).toBe(105 + 0.8133245868750881);
});