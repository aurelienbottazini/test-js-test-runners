const sum2900 = require('../sum2900.js');

test('adds 89 + 42 to equal 131 + 0.4448003738220253', () => {
  expect(sum2900(89, 42)).toBe(131 + 0.4448003738220253);
});