const sum = require('../sum');

test('adds 17 + 91 to equal 108', () => {
  expect(sum(17, 91)).toBe(108);
});