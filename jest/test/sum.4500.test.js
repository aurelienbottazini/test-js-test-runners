const sum = require('../sum');

test('adds 45 + 18 to equal 63', () => {
  expect(sum(45, 18)).toBe(63);
});