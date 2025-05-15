const sum = require('../sum');

test('adds 37 + 14 to equal 51', () => {
  expect(sum(37, 14)).toBe(51);
});