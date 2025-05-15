const sum = require('../sum');

test('adds 51 + 69 to equal 120', () => {
  expect(sum(51, 69)).toBe(120);
});