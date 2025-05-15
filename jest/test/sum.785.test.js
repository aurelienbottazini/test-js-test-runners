const sum = require('../sum');

test('adds 31 + 40 to equal 71', () => {
  expect(sum(31, 40)).toBe(71);
});