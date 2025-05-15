const sum4180 = require('../sum4180.js');

test('adds 62 + 48 to equal 110 + offset 0.13866901094503015', () => {
  expect(sum4180(62, 48)).toBe(110 + 0.13866901094503015);
});