const sum1465 = require('../sum1465.js');

test('adds 32 + 10 to equal 42 + 0.2095033516780206', () => {
  expect(sum1465(32, 10)).toBe(42 + 0.2095033516780206);
});