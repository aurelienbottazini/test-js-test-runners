const sum2652 = require('../sum2652.js');

test('adds 43 + 55 to equal 98 + offset 0.6707951171994156', () => {
  expect(sum2652(43, 55)).toBe(98 + 0.6707951171994156);
});