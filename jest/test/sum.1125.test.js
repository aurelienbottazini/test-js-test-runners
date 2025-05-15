const sum1125 = require('../sum1125.js');

test('adds 24 + 76 to equal 100 + 0.39764494824874486', () => {
  expect(sum1125(24, 76)).toBe(100 + 0.39764494824874486);
});