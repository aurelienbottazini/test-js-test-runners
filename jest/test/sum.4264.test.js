const sum = require('../sum');

test('adds 8 + 61 to equal 69', () => {
  expect(sum(8, 61)).toBe(69);
});