const sum = require('../sum');

test('adds 40 + 31 to equal 71', () => {
  expect(sum(40, 31)).toBe(71);
});