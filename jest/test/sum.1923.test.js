const sum = require('../sum');

test('adds 23 + 66 to equal 89', () => {
  expect(sum(23, 66)).toBe(89);
});