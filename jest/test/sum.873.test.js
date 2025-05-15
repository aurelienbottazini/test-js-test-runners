const sum = require('../sum');

test('adds 37 + 15 to equal 52', () => {
  expect(sum(37, 15)).toBe(52);
});