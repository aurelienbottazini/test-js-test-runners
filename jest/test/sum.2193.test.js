const sum2193 = require('../sum2193.js');

test('adds 9 + 14 to equal 23 + offset 0.22863304929347072', () => {
  expect(sum2193(9, 14)).toBe(23 + 0.22863304929347072);
});