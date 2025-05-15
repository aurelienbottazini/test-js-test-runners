const sum = require('../sum');

test('adds 10 + 51 to equal 61', () => {
  expect(sum(10, 51)).toBe(61);
});