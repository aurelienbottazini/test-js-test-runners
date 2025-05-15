const sum2081 = require('../sum2081.js');

test('adds 94 + 50 to equal 144 + offset 0.06268029028809252', () => {
  expect(sum2081(94, 50)).toBe(144 + 0.06268029028809252);
});