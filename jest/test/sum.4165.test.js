const sum = require('../sum');

test('adds 56 + 81 to equal 137', () => {
  expect(sum(56, 81)).toBe(137);
});