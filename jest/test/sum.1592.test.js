const sum = require('../sum');

test('adds 49 + 56 to equal 105', () => {
  expect(sum(49, 56)).toBe(105);
});