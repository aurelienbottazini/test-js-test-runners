const sum = require('../sum');

test('adds 8 + 81 to equal 89', () => {
  expect(sum(8, 81)).toBe(89);
});