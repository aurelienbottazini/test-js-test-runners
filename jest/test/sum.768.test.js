const sum = require('../sum');

test('adds 53 + 36 to equal 89', () => {
  expect(sum(53, 36)).toBe(89);
});