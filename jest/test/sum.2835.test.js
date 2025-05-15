const sum2835 = require('../sum2835.js');

test('adds 21 + 86 to equal 107 + offset 0.6130847294739171', () => {
  expect(sum2835(21, 86)).toBe(107 + 0.6130847294739171);
});