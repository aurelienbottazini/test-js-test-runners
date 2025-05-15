const sum = require('../sum');

test('adds 72 + 48 to equal 120', () => {
  expect(sum(72, 48)).toBe(120);
});