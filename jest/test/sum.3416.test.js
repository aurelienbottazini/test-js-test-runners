const sum = require('../sum');

test('adds 48 + 17 to equal 65', () => {
  expect(sum(48, 17)).toBe(65);
});