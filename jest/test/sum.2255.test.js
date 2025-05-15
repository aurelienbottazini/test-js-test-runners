const sum = require('../sum');

test('adds 23 + 18 to equal 41', () => {
  expect(sum(23, 18)).toBe(41);
});