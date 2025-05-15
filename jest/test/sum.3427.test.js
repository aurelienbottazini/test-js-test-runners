const sum3427 = require('../sum3427.js');

test('adds 72 + 68 to equal 140 + offset 0.5283973892687258', () => {
  expect(sum3427(72, 68)).toBe(140 + 0.5283973892687258);
});