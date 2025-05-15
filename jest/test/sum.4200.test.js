const sum = require('../sum');

test('adds 24 + 70 to equal 94', () => {
  expect(sum(24, 70)).toBe(94);
});