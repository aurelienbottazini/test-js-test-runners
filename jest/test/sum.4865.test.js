const sum4865 = require('../sum4865.js');

test('adds 87 + 93 to equal 180 + offset 0.3473178698695385', () => {
  expect(sum4865(87, 93)).toBe(180 + 0.3473178698695385);
});