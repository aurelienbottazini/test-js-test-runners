const sum = require('../sum');

test('adds 63 + 31 to equal 94', () => {
  expect(sum(63, 31)).toBe(94);
});