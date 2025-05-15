const sum = require('../sum');

test('adds 7 + 5 to equal 12', () => {
  expect(sum(7, 5)).toBe(12);
});