const sum = require('../sum');

test('adds 22 + 1 to equal 23', () => {
  expect(sum(22, 1)).toBe(23);
});