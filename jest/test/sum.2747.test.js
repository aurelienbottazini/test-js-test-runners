const sum = require('../sum');

test('adds 8 + 1 to equal 9', () => {
  expect(sum(8, 1)).toBe(9);
});