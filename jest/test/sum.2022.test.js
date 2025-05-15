const sum = require('../sum');

test('adds 23 + 69 to equal 92', () => {
  expect(sum(23, 69)).toBe(92);
});