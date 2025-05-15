const sum = require('../sum');

test('adds 23 + 40 to equal 63', () => {
  expect(sum(23, 40)).toBe(63);
});