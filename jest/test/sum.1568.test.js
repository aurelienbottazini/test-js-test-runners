const sum = require('../sum');

test('adds 49 + 34 to equal 83', () => {
  expect(sum(49, 34)).toBe(83);
});