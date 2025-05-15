const sum = require('../sum');

test('adds 59 + 78 to equal 137', () => {
  expect(sum(59, 78)).toBe(137);
});