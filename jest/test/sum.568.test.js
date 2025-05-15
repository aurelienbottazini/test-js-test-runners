const sum = require('../sum');

test('adds 89 + 0 to equal 89', () => {
  expect(sum(89, 0)).toBe(89);
});