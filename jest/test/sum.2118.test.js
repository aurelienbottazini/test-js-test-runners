const sum = require('../sum');

test('adds 88 + 1 to equal 89', () => {
  expect(sum(88, 1)).toBe(89);
});