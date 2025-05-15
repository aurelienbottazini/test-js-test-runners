const sum = require('../sum');

test('adds 78 + 42 to equal 120', () => {
  expect(sum(78, 42)).toBe(120);
});