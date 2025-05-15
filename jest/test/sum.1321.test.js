const sum1321 = require('../sum1321.js');

test('adds 17 + 55 to equal 72 + offset 0.6729441951694258', () => {
  expect(sum1321(17, 55)).toBe(72 + 0.6729441951694258);
});