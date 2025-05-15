const sum = require('../sum');

test('adds 95 + 47 to equal 142', () => {
  expect(sum(95, 47)).toBe(142);
});