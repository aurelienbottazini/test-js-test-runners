const sum = require('../sum');

test('adds 42 + 27 to equal 69', () => {
  expect(sum(42, 27)).toBe(69);
});