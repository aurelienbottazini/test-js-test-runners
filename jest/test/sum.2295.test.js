const sum = require('../sum');

test('adds 34 + 55 to equal 89', () => {
  expect(sum(34, 55)).toBe(89);
});