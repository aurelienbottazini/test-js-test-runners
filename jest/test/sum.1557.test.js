const sum = require('../sum');

test('adds 60 + 23 to equal 83', () => {
  expect(sum(60, 23)).toBe(83);
});