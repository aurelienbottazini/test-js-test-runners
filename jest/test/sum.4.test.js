const sum = require('../sum');

test('adds 59 + 72 to equal 131', () => {
  expect(sum(59, 72)).toBe(131);
});