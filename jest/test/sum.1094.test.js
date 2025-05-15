const sum = require('../sum');

test('adds 56 + 7 to equal 63', () => {
  expect(sum(56, 7)).toBe(63);
});