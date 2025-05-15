const sum2540 = require('../sum2540.js');

test('adds 99 + 36 to equal 135 + 0.6361559638777257', () => {
  expect(sum2540(99, 36)).toBe(135 + 0.6361559638777257);
});