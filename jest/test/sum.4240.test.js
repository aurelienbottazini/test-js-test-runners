const sum = require('../sum');

test('adds 69 + 2 to equal 71', () => {
  expect(sum(69, 2)).toBe(71);
});