const sum = require('../sum');

test('adds 5 + 58 to equal 63', () => {
  expect(sum(5, 58)).toBe(63);
});