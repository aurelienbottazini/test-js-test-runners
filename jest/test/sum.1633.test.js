const sum = require('../sum');

test('adds 36 + 5 to equal 41', () => {
  expect(sum(36, 5)).toBe(41);
});