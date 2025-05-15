const sum = require('../sum');

test('adds 47 + 48 to equal 95', () => {
  expect(sum(47, 48)).toBe(95);
});