const sum = require('../sum');

test('adds 42 + 72 to equal 114', () => {
  expect(sum(42, 72)).toBe(114);
});