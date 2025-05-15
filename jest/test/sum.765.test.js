const sum = require('../sum');

test('adds 42 + 94 to equal 136', () => {
  expect(sum(42, 94)).toBe(136);
});