const sum1045 = require('../sum1045.js');

test('adds 57 + 58 to equal 115 + offset 0.4571017322149711', () => {
  expect(sum1045(57, 58)).toBe(115 + 0.4571017322149711);
});