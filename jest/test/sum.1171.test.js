const sum = require('../sum');

test('adds 11 + 58 to equal 69', () => {
  expect(sum(11, 58)).toBe(69);
});