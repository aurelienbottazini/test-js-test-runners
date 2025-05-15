const sum = require('../sum');

test('adds 52 + 31 to equal 83', () => {
  expect(sum(52, 31)).toBe(83);
});