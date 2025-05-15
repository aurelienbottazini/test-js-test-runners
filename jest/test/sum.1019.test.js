const sum = require('../sum');

test('adds 63 + 36 to equal 99', () => {
  expect(sum(63, 36)).toBe(99);
});