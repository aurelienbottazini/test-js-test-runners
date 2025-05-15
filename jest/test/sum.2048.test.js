const sum2048 = require('../sum2048.js');

test('adds 63 + 23 to equal 86 + 0.25300858623900035', () => {
  expect(sum2048(63, 23)).toBe(86 + 0.25300858623900035);
});