const sum3474 = require('../sum3474.js');

test('adds 47 + 76 to equal 123 + offset 0.1835512622970643', () => {
  expect(sum3474(47, 76)).toBe(123 + 0.1835512622970643);
});