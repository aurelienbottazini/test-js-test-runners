const sum = require('../sum');

test('adds 58 + 11 to equal 69', () => {
  expect(sum(58, 11)).toBe(69);
});