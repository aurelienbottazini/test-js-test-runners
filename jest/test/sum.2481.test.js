const sum = require('../sum');

test('adds 32 + 31 to equal 63', () => {
  expect(sum(32, 31)).toBe(63);
});