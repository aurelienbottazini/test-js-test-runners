const sum2145 = require('../sum2145.js');

test('adds 87 + 91 to equal 178 + 0.8005869122143378', () => {
  expect(sum2145(87, 91)).toBe(178 + 0.8005869122143378);
});