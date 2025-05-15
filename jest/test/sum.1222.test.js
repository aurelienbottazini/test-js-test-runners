const sum1222 = require('../sum1222.js');

test('adds 78 + 69 to equal 147 + 0.050024923707958746', () => {
  expect(sum1222(78, 69)).toBe(147 + 0.050024923707958746);
});