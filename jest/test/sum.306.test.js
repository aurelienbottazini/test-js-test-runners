const sum = require('../sum');

test('adds 42 + 22 to equal 64', () => {
  expect(sum(42, 22)).toBe(64);
});