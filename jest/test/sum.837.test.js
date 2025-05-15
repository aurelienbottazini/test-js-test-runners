const sum = require('../sum');

test('adds 14 + 80 to equal 94', () => {
  expect(sum(14, 80)).toBe(94);
});