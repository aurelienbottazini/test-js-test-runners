const sum = require('../sum');

test('adds 60 + 5 to equal 65', () => {
  expect(sum(60, 5)).toBe(65);
});