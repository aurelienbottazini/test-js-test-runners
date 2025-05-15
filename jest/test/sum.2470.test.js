const sum = require('../sum');

test('adds 50 + 44 to equal 94', () => {
  expect(sum(50, 44)).toBe(94);
});