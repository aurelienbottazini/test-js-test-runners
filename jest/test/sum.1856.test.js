const sum = require('../sum');

test('adds 15 + 77 to equal 92', () => {
  expect(sum(15, 77)).toBe(92);
});