const sum = require('../sum');

test('adds 37 + 62 to equal 99', () => {
  expect(sum(37, 62)).toBe(99);
});