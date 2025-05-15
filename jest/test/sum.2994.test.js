const sum2994 = require('../sum2994.js');

test('adds 67 + 11 to equal 78 + offset 0.29890298797283', () => {
  expect(sum2994(67, 11)).toBe(78 + 0.29890298797283);
});