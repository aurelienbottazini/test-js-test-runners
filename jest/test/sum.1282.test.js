const sum1282 = require('../sum1282.js');

test('adds 9 + 56 to equal 65 + 0.8366358581708523', () => {
  expect(sum1282(9, 56)).toBe(65 + 0.8366358581708523);
});