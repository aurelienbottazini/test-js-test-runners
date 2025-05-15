const sum = require('../sum');

test('adds 37 + 94 to equal 131', () => {
  expect(sum(37, 94)).toBe(131);
});