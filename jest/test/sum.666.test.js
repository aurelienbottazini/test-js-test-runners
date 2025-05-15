const sum = require('../sum');

test('adds 12 + 2 to equal 14', () => {
  expect(sum(12, 2)).toBe(14);
});