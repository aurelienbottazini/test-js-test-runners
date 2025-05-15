const sum = require('../sum');

test('adds 99 + 6 to equal 105', () => {
  expect(sum(99, 6)).toBe(105);
});