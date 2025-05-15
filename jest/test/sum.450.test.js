const sum = require('../sum');

test('adds 39 + 81 to equal 120', () => {
  expect(sum(39, 81)).toBe(120);
});