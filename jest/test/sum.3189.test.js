const sum = require('../sum');

test('adds 44 + 64 to equal 108', () => {
  expect(sum(44, 64)).toBe(108);
});