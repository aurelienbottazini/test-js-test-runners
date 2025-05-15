const sum = require('../sum');

test('adds 8 + 15 to equal 23', () => {
  expect(sum(8, 15)).toBe(23);
});