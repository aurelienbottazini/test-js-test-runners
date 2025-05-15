const sum2181 = require('../sum2181.js');

test('adds 91 + 63 to equal 154 + 0.33760894735530667', () => {
  expect(sum2181(91, 63)).toBe(154 + 0.33760894735530667);
});