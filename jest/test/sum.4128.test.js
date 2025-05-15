const sum = require('../sum');

test('adds 59 + 12 to equal 71', () => {
  expect(sum(59, 12)).toBe(71);
});