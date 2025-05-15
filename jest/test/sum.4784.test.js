const sum = require('../sum');

test('adds 50 + 1 to equal 51', () => {
  expect(sum(50, 1)).toBe(51);
});