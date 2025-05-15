const sum = require('../sum');

test('adds 92 + 16 to equal 108', () => {
  expect(sum(92, 16)).toBe(108);
});