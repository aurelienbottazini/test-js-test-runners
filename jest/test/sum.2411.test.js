const sum2411 = require('../sum2411.js');

test('adds 32 + 2 to equal 34 + offset 0.13800006583211855', () => {
  expect(sum2411(32, 2)).toBe(34 + 0.13800006583211855);
});