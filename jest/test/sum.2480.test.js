const sum = require('../sum');

test('adds 27 + 56 to equal 83', () => {
  expect(sum(27, 56)).toBe(83);
});