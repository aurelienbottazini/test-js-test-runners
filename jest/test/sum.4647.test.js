const sum = require('../sum');

test('adds 5 + 18 to equal 23', () => {
  expect(sum(5, 18)).toBe(23);
});