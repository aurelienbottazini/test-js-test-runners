const sum = require('../sum');

test('adds 4 + 61 to equal 65', () => {
  expect(sum(4, 61)).toBe(65);
});