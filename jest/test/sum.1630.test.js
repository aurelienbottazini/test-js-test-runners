const sum = require('../sum');

test('adds 41 + 58 to equal 99', () => {
  expect(sum(41, 58)).toBe(99);
});