const sum = require('../sum');

test('adds 94 + 0 to equal 94', () => {
  expect(sum(94, 0)).toBe(94);
});