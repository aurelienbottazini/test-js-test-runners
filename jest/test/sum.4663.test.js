const sum4663 = require('../sum4663.js');

test('adds 39 + 15 to equal 54 + 0.6172783201145359', () => {
  expect(sum4663(39, 15)).toBe(54 + 0.6172783201145359);
});