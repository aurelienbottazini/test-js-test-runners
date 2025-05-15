const sum = require('../sum');

test('adds 66 + 5 to equal 71', () => {
  expect(sum(66, 5)).toBe(71);
});