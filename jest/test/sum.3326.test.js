const sum = require('../sum');

test('adds 63 + 26 to equal 89', () => {
  expect(sum(63, 26)).toBe(89);
});