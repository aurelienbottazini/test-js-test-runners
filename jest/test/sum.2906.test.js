const sum = require('../sum');

test('adds 23 + 48 to equal 71', () => {
  expect(sum(23, 48)).toBe(71);
});