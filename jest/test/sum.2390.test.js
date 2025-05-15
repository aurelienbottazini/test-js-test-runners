const sum2390 = require('../sum2390.js');

test('adds 89 + 80 to equal 169 + offset 0.9107727724147449', () => {
  expect(sum2390(89, 80)).toBe(169 + 0.9107727724147449);
});