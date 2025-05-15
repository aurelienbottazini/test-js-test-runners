const sum = require('../sum');

test('adds 9 + 50 to equal 59', () => {
  expect(sum(9, 50)).toBe(59);
});