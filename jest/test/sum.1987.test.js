const sum = require('../sum');

test('adds 44 + 19 to equal 63', () => {
  expect(sum(44, 19)).toBe(63);
});