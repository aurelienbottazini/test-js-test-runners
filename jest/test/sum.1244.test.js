const sum1244 = require('../sum1244.js');

test('adds 64 + 38 to equal 102 + offset 0.1016260210436225', () => {
  expect(sum1244(64, 38)).toBe(102 + 0.1016260210436225);
});