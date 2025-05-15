const sum = require('../sum');

test('adds 82 + 17 to equal 99', () => {
  expect(sum(82, 17)).toBe(99);
});