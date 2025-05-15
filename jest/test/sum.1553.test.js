const sum = require('../sum');

test('adds 55 + 53 to equal 108', () => {
  expect(sum(55, 53)).toBe(108);
});