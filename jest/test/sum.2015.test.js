const sum = require('../sum');

test('adds 31 + 7 to equal 38', () => {
  expect(sum(31, 7)).toBe(38);
});