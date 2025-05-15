const sum = require('../sum');

test('adds 77 + 6 to equal 83', () => {
  expect(sum(77, 6)).toBe(83);
});