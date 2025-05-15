const sum = require('../sum');

test('adds 47 + 14 to equal 61', () => {
  expect(sum(47, 14)).toBe(61);
});