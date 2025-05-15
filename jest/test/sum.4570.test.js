const sum = require('../sum');

test('adds 56 + 68 to equal 124', () => {
  expect(sum(56, 68)).toBe(124);
});