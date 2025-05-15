const sum2605 = require('../sum2605.js');

test('adds 32 + 65 to equal 97 + 0.5969917082450613', () => {
  expect(sum2605(32, 65)).toBe(97 + 0.5969917082450613);
});