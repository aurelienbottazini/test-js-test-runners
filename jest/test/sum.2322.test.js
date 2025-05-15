const sum = require('../sum');

test('adds 24 + 96 to equal 120', () => {
  expect(sum(24, 96)).toBe(120);
});