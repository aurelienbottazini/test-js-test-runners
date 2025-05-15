const sum = require('../sum');

test('adds 39 + 22 to equal 61', () => {
  expect(sum(39, 22)).toBe(61);
});