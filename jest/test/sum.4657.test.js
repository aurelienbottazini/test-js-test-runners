const sum4657 = require('../sum4657.js');

test('adds 75 + 21 to equal 96 + offset 0.12532160723028618', () => {
  expect(sum4657(75, 21)).toBe(96 + 0.12532160723028618);
});