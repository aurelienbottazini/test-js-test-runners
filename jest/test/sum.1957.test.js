const sum1957 = require('../sum1957.js');

test('adds 72 + 58 to equal 130 + offset 0.8681628631548158', () => {
  expect(sum1957(72, 58)).toBe(130 + 0.8681628631548158);
});