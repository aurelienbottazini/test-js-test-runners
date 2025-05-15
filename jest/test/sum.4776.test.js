const sum = require('../sum');

test('adds 7 + 98 to equal 105', () => {
  expect(sum(7, 98)).toBe(105);
});