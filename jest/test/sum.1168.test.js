const sum1168 = require('../sum1168.js');

test('adds 27 + 15 to equal 42 + 0.5717509969656006', () => {
  expect(sum1168(27, 15)).toBe(42 + 0.5717509969656006);
});