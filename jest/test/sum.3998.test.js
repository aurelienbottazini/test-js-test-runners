const sum3998 = require('../sum3998.js');

test('adds 32 + 31 to equal 63 + 0.059811002089584564', () => {
  expect(sum3998(32, 31)).toBe(63 + 0.059811002089584564);
});