const sum = require('../sum');

test('adds 55 + 1 to equal 56', () => {
  expect(sum(55, 1)).toBe(56);
});