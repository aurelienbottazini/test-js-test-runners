const sum = require('../sum');

test('adds 39 + 56 to equal 95', () => {
  expect(sum(39, 56)).toBe(95);
});