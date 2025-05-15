const sum = require('../sum');

test('adds 39 + 98 to equal 137', () => {
  expect(sum(39, 98)).toBe(137);
});