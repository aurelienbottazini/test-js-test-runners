const sum = require('../sum');

test('adds 82 + 38 to equal 120', () => {
  expect(sum(82, 38)).toBe(120);
});