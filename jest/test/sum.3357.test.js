const sum = require('../sum');

test('adds 39 + 45 to equal 84', () => {
  expect(sum(39, 45)).toBe(84);
});