const sum1777 = require('../sum1777.js');

test('adds 55 + 99 to equal 154 + offset 0.2359803081972014', () => {
  expect(sum1777(55, 99)).toBe(154 + 0.2359803081972014);
});