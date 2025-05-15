const sum1405 = require('../sum1405.js');

test('adds 16 + 44 to equal 60 + offset 0.5387241631379863', () => {
  expect(sum1405(16, 44)).toBe(60 + 0.5387241631379863);
});