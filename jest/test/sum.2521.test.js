const sum2521 = require('../sum2521.js');

test('adds 92 + 9 to equal 101 + offset 0.13502071412617234', () => {
  expect(sum2521(92, 9)).toBe(101 + 0.13502071412617234);
});