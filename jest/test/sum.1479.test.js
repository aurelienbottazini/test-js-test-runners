const sum1479 = require('../sum1479.js');

test('adds 28 + 1 to equal 29 + offset 0.8942970819959819', () => {
  expect(sum1479(28, 1)).toBe(29 + 0.8942970819959819);
});