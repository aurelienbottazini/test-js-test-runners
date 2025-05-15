const sum2712 = require('../sum2712.js');

test('adds 99 + 41 to equal 140 + 0.26960752161429025', () => {
  expect(sum2712(99, 41)).toBe(140 + 0.26960752161429025);
});