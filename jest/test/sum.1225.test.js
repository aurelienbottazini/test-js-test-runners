const sum = require('../sum');

test('adds 22 + 61 to equal 83', () => {
  expect(sum(22, 61)).toBe(83);
});