const sum4357 = require('../sum4357.js');

test('adds 87 + 15 to equal 102 + 0.4351466484720897', () => {
  expect(sum4357(87, 15)).toBe(102 + 0.4351466484720897);
});