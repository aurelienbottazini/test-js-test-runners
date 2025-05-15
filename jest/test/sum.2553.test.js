const sum = require('../sum');

test('adds 32 + 42 to equal 74', () => {
  expect(sum(32, 42)).toBe(74);
});