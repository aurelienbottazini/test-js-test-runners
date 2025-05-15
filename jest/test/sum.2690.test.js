const sum2690 = require('../sum2690.js');

test('adds 69 + 20 to equal 89 + 0.3013006205340588', () => {
  expect(sum2690(69, 20)).toBe(89 + 0.3013006205340588);
});