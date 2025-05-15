const sum2902 = require('../sum2902.js');

test('adds 66 + 80 to equal 146 + offset 0.01969628087803299', () => {
  expect(sum2902(66, 80)).toBe(146 + 0.01969628087803299);
});