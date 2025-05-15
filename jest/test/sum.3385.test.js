const sum = require('../sum');

test('adds 18 + 5 to equal 23', () => {
  expect(sum(18, 5)).toBe(23);
});