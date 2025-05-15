const sum = require('../sum');

test('adds 68 + 40 to equal 108', () => {
  expect(sum(68, 40)).toBe(108);
});