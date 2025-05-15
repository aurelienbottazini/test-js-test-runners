const sum578 = require('../sum578.js');

test('adds 82 + 98 to equal 180 + offset 0.13664508412431342', () => {
  expect(sum578(82, 98)).toBe(180 + 0.13664508412431342);
});