const sum = require('../sum');

test('adds 81 + 56 to equal 137', () => {
  expect(sum(81, 56)).toBe(137);
});