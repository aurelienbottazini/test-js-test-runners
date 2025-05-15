const sum = require('../sum');

test('adds 31 + 52 to equal 83', () => {
  expect(sum(31, 52)).toBe(83);
});