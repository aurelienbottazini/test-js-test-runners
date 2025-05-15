const sum4535 = require('../sum4535.js');

test('adds 48 + 76 to equal 124 + 0.04441913363442118', () => {
  expect(sum4535(48, 76)).toBe(124 + 0.04441913363442118);
});