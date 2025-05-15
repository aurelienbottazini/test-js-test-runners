const sum = require('../sum');

test('adds 21 + 42 to equal 63', () => {
  expect(sum(21, 42)).toBe(63);
});