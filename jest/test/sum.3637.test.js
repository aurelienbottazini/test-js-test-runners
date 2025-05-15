const sum = require('../sum');

test('adds 53 + 18 to equal 71', () => {
  expect(sum(53, 18)).toBe(71);
});