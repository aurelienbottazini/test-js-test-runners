const sum = require('../sum');

test('adds 12 + 51 to equal 63', () => {
  expect(sum(12, 51)).toBe(63);
});