const sum2551 = require('../sum2551.js');

test('adds 18 + 95 to equal 113 + offset 0.7298356748355626', () => {
  expect(sum2551(18, 95)).toBe(113 + 0.7298356748355626);
});