const sum = require('../sum');

test('adds 11 + 97 to equal 108', () => {
  expect(sum(11, 97)).toBe(108);
});