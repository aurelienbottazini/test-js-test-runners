const sum = require('../sum');

test('adds 49 + 50 to equal 99', () => {
  expect(sum(49, 50)).toBe(99);
});