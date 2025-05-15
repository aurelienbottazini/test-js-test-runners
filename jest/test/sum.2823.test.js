const sum = require('../sum');

test('adds 47 + 90 to equal 137', () => {
  expect(sum(47, 90)).toBe(137);
});