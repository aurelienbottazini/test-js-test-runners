const sum = require('../sum');

test('adds 15 + 56 to equal 71', () => {
  expect(sum(15, 56)).toBe(71);
});