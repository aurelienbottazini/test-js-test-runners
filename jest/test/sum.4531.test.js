const sum = require('../sum');

test('adds 21 + 99 to equal 120', () => {
  expect(sum(21, 99)).toBe(120);
});