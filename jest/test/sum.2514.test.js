const sum2514 = require('../sum2514.js');

test('adds 63 + 30 to equal 93 + 0.508171609512983', () => {
  expect(sum2514(63, 30)).toBe(93 + 0.508171609512983);
});