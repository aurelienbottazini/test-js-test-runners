const sum = require('../sum');

test('adds 34 + 37 to equal 71', () => {
  expect(sum(34, 37)).toBe(71);
});