const sum = require('../sum');

test('adds 44 + 39 to equal 83', () => {
  expect(sum(44, 39)).toBe(83);
});