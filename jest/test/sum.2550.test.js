const sum2550 = require('../sum2550.js');

test('adds 8 + 11 to equal 19 + offset 0.884322156833597', () => {
  expect(sum2550(8, 11)).toBe(19 + 0.884322156833597);
});