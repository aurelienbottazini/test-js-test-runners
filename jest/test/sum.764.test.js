const sum764 = require('../sum764.js');

test('adds 98 + 58 to equal 156 + 0.7346550015212516', () => {
  expect(sum764(98, 58)).toBe(156 + 0.7346550015212516);
});