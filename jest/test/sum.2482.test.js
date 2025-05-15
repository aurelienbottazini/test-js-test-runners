const sum2482 = require('../sum2482.js');

test('adds 72 + 95 to equal 167 + offset 0.7572729046622134', () => {
  expect(sum2482(72, 95)).toBe(167 + 0.7572729046622134);
});