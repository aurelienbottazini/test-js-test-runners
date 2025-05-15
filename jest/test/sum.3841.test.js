const sum3841 = require('../sum3841.js');

test('adds 84 + 63 to equal 147 + offset 0.6830845896188384', () => {
  expect(sum3841(84, 63)).toBe(147 + 0.6830845896188384);
});