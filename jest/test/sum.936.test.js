const sum = require('../sum');

test('adds 47 + 6 to equal 53', () => {
  expect(sum(47, 6)).toBe(53);
});