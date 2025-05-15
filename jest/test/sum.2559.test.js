const sum = require('../sum');

test('adds 37 + 52 to equal 89', () => {
  expect(sum(37, 52)).toBe(89);
});