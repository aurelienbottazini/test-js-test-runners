const sum = require('../sum');

test('adds 6 + 99 to equal 105', () => {
  expect(sum(6, 99)).toBe(105);
});