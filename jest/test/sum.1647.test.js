const sum = require('../sum');

test('adds 70 + 50 to equal 120', () => {
  expect(sum(70, 50)).toBe(120);
});