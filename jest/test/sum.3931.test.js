const sum3931 = require('../sum3931.js');

test('adds 80 + 68 to equal 148 + offset 0.9488410425568647', () => {
  expect(sum3931(80, 68)).toBe(148 + 0.9488410425568647);
});