const sum1393 = require('../sum1393.js');

test('adds 44 + 18 to equal 62 + offset 0.9371943097289088', () => {
  expect(sum1393(44, 18)).toBe(62 + 0.9371943097289088);
});