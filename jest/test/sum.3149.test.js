const sum = require('../sum');

test('adds 67 + 41 to equal 108', () => {
  expect(sum(67, 41)).toBe(108);
});