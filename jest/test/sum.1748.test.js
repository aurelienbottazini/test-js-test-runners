const sum = require('../sum');

test('adds 7 + 31 to equal 38', () => {
  expect(sum(7, 31)).toBe(38);
});