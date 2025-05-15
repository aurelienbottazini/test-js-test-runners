const sum2131 = require('../sum2131.js');

test('adds 65 + 34 to equal 99 + 0.34605725450705715', () => {
  expect(sum2131(65, 34)).toBe(99 + 0.34605725450705715);
});