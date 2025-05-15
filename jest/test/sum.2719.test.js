const sum2719 = require('../sum2719.js');

test('adds 24 + 65 to equal 89 + offset 0.9963291174620676', () => {
  expect(sum2719(24, 65)).toBe(89 + 0.9963291174620676);
});