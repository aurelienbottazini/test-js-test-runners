const sum1115 = require('../sum1115.js');

test('adds 63 + 61 to equal 124 + offset 0.41685394446692314', () => {
  expect(sum1115(63, 61)).toBe(124 + 0.41685394446692314);
});