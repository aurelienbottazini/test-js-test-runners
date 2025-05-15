const sum = require('../sum');

test('adds 94 + 1 to equal 95', () => {
  expect(sum(94, 1)).toBe(95);
});