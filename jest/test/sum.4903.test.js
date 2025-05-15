const sum4903 = require('../sum4903.js');

test('adds 89 + 80 to equal 169 + offset 0.9938204087260175', () => {
  expect(sum4903(89, 80)).toBe(169 + 0.9938204087260175);
});