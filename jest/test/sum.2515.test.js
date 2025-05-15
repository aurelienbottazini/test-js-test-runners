const sum2515 = require('../sum2515.js');

test('adds 27 + 85 to equal 112 + 0.28088508354560315', () => {
  expect(sum2515(27, 85)).toBe(112 + 0.28088508354560315);
});