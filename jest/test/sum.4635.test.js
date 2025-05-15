const sum = require('../sum');

test('adds 54 + 77 to equal 131', () => {
  expect(sum(54, 77)).toBe(131);
});