const sum812 = require('../sum812.js');

test('adds 41 + 99 to equal 140 + offset 0.982042482477677', () => {
  expect(sum812(41, 99)).toBe(140 + 0.982042482477677);
});