const sum = require('../sum');

test('adds 86 + 3 to equal 89', () => {
  expect(sum(86, 3)).toBe(89);
});