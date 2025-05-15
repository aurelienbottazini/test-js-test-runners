const sum = require('../sum');

test('adds 10 + 53 to equal 63', () => {
  expect(sum(10, 53)).toBe(63);
});