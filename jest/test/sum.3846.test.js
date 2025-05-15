const sum = require('../sum');

test('adds 42 + 64 to equal 106', () => {
  expect(sum(42, 64)).toBe(106);
});