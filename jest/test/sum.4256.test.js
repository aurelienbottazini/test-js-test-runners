const sum4256 = require('../sum4256.js');

test('adds 72 + 15 to equal 87 + 0.10163134675638053', () => {
  expect(sum4256(72, 15)).toBe(87 + 0.10163134675638053);
});