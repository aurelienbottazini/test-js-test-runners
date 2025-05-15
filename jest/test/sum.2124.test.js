const sum2124 = require('../sum2124.js');

test('adds 82 + 20 to equal 102 + 0.1410190769144517', () => {
  expect(sum2124(82, 20)).toBe(102 + 0.1410190769144517);
});