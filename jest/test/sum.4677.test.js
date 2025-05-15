const sum = require('../sum');

test('adds 63 + 6 to equal 69', () => {
  expect(sum(63, 6)).toBe(69);
});