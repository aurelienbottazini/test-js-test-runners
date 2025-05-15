const sum2108 = require('../sum2108.js');

test('adds 40 + 55 to equal 95 + offset 0.06512152845164232', () => {
  expect(sum2108(40, 55)).toBe(95 + 0.06512152845164232);
});