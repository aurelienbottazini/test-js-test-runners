const sum2808 = require('../sum2808.js');

test('adds 37 + 69 to equal 106 + offset 0.8870123856147154', () => {
  expect(sum2808(37, 69)).toBe(106 + 0.8870123856147154);
});