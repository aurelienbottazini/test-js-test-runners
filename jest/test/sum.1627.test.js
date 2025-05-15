const sum = require('../sum');

test('adds 89 + 31 to equal 120', () => {
  expect(sum(89, 31)).toBe(120);
});