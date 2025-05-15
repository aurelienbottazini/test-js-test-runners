const sum1930 = require('../sum1930.js');

test('adds 52 + 89 to equal 141 + 0.62018620834471', () => {
  expect(sum1930(52, 89)).toBe(141 + 0.62018620834471);
});