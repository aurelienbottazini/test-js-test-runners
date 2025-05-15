const sum2509 = require('../sum2509.js');

test('adds 26 + 66 to equal 92 + offset 0.939527285092987', () => {
  expect(sum2509(26, 66)).toBe(92 + 0.939527285092987);
});