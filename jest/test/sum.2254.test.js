const sum = require('../sum');

test('adds 34 + 27 to equal 61', () => {
  expect(sum(34, 27)).toBe(61);
});