const sum = require('../sum');

test('adds 38 + 70 to equal 108', () => {
  expect(sum(38, 70)).toBe(108);
});