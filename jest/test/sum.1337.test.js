const sum = require('../sum');

test('adds 33 + 50 to equal 83', () => {
  expect(sum(33, 50)).toBe(83);
});