const sum = require('../sum');

test('adds 44 + 50 to equal 94', () => {
  expect(sum(44, 50)).toBe(94);
});