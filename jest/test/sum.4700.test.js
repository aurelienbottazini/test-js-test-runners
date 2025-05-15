const sum = require('../sum');

test('adds 43 + 77 to equal 120', () => {
  expect(sum(43, 77)).toBe(120);
});