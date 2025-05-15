const sum2749 = require('../sum2749.js');

test('adds 33 + 25 to equal 58 + offset 0.27652064806792154', () => {
  expect(sum2749(33, 25)).toBe(58 + 0.27652064806792154);
});