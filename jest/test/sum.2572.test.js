const sum2572 = require('../sum2572.js');

test('adds 43 + 6 to equal 49 + offset 0.005181014254485139', () => {
  expect(sum2572(43, 6)).toBe(49 + 0.005181014254485139);
});