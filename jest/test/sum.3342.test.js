const sum = require('../sum');

test('adds 39 + 42 to equal 81', () => {
  expect(sum(39, 42)).toBe(81);
});