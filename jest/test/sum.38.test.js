const sum = require('../sum');

test('adds 28 + 61 to equal 89', () => {
  expect(sum(28, 61)).toBe(89);
});