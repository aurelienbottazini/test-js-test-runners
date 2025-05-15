const sum = require('../sum');

test('adds 50 + 92 to equal 142', () => {
  expect(sum(50, 92)).toBe(142);
});