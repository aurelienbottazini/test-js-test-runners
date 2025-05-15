const sum = require('../sum');

test('adds 99 + 62 to equal 161', () => {
  expect(sum(99, 62)).toBe(161);
});