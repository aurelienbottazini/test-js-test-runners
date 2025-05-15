const sum4794 = require('../sum4794.js');

test('adds 62 + 80 to equal 142 + offset 0.5155668173459675', () => {
  expect(sum4794(62, 80)).toBe(142 + 0.5155668173459675);
});