const sum = require('../sum');

test('adds 23 + 32 to equal 55', () => {
  expect(sum(23, 32)).toBe(55);
});