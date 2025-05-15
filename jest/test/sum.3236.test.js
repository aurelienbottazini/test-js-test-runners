const sum = require('../sum');

test('adds 98 + 39 to equal 137', () => {
  expect(sum(98, 39)).toBe(137);
});