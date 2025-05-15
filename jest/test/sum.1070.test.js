const sum = require('../sum');

test('adds 58 + 84 to equal 142', () => {
  expect(sum(58, 84)).toBe(142);
});