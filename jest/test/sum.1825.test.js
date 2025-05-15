const sum = require('../sum');

test('adds 56 + 15 to equal 71', () => {
  expect(sum(56, 15)).toBe(71);
});