const sum = require('../sum');

test('adds 55 + 65 to equal 120', () => {
  expect(sum(55, 65)).toBe(120);
});