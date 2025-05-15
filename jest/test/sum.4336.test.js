const sum = require('../sum');

test('adds 36 + 19 to equal 55', () => {
  expect(sum(36, 19)).toBe(55);
});