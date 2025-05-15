const sum = require('../sum');

test('adds 24 + 39 to equal 63', () => {
  expect(sum(24, 39)).toBe(63);
});