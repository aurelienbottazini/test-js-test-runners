const sum2525 = require('../sum2525.js');

test('adds 27 + 50 to equal 77 + offset 0.1301118018848425', () => {
  expect(sum2525(27, 50)).toBe(77 + 0.1301118018848425);
});