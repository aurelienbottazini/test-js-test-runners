const sum = require('../sum');

test('adds 30 + 11 to equal 41', () => {
  expect(sum(30, 11)).toBe(41);
});