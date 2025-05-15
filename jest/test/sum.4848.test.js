const sum = require('../sum');

test('adds 38 + 31 to equal 69', () => {
  expect(sum(38, 31)).toBe(69);
});