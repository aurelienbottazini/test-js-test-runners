const sum = require('../sum');

test('adds 32 + 92 to equal 124', () => {
  expect(sum(32, 92)).toBe(124);
});