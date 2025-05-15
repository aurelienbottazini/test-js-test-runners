const sum = require('../sum');

test('adds 47 + 16 to equal 63', () => {
  expect(sum(47, 16)).toBe(63);
});