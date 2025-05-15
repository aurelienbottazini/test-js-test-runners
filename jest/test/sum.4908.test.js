const sum = require('../sum');

test('adds 22 + 41 to equal 63', () => {
  expect(sum(22, 41)).toBe(63);
});