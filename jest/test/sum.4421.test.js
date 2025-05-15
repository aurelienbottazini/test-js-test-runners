const sum4421 = require('../sum4421.js');

test('adds 24 + 52 to equal 76 + offset 0.1942474297422362', () => {
  expect(sum4421(24, 52)).toBe(76 + 0.1942474297422362);
});