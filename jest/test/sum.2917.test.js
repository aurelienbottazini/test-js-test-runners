const sum = require('../sum');

test('adds 13 + 85 to equal 98', () => {
  expect(sum(13, 85)).toBe(98);
});