const sum2458 = require('../sum2458.js');

test('adds 80 + 50 to equal 130 + 0.4699918279200831', () => {
  expect(sum2458(80, 50)).toBe(130 + 0.4699918279200831);
});