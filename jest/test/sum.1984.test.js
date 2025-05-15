const sum = require('../sum');

test('adds 19 + 50 to equal 69', () => {
  expect(sum(19, 50)).toBe(69);
});