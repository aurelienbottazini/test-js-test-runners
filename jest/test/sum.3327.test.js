const sum = require('../sum');

test('adds 68 + 42 to equal 110', () => {
  expect(sum(68, 42)).toBe(110);
});