const sum = require('../sum');

test('adds 49 + 59 to equal 108', () => {
  expect(sum(49, 59)).toBe(108);
});