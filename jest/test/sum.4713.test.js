const sum = require('../sum');

test('adds 81 + 2 to equal 83', () => {
  expect(sum(81, 2)).toBe(83);
});