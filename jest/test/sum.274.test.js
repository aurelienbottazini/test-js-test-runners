const sum = require('../sum');

test('adds 34 + 1 to equal 35', () => {
  expect(sum(34, 1)).toBe(35);
});