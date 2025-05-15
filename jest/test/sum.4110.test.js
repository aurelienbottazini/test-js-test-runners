const sum4110 = require('../sum4110.js');

test('adds 96 + 78 to equal 174 + offset 0.5664367298050518', () => {
  expect(sum4110(96, 78)).toBe(174 + 0.5664367298050518);
});