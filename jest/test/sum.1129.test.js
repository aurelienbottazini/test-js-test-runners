const sum = require('../sum');

test('adds 53 + 84 to equal 137', () => {
  expect(sum(53, 84)).toBe(137);
});