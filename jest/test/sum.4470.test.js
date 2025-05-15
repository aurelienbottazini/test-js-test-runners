const sum = require('../sum');

test('adds 10 + 31 to equal 41', () => {
  expect(sum(10, 31)).toBe(41);
});