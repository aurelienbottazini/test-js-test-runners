const sum = require('../sum');

test('adds 12 + 96 to equal 108', () => {
  expect(sum(12, 96)).toBe(108);
});