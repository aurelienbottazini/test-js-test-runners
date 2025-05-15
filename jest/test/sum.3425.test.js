const sum3425 = require('../sum3425.js');

test('adds 50 + 90 to equal 140 + offset 0.2663165487500664', () => {
  expect(sum3425(50, 90)).toBe(140 + 0.2663165487500664);
});