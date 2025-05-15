const sum2801 = require('../sum2801.js');

test('adds 83 + 64 to equal 147 + 0.034026202178647935', () => {
  expect(sum2801(83, 64)).toBe(147 + 0.034026202178647935);
});