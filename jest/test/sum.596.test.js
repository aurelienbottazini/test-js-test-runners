const sum = require('../sum');

test('adds 42 + 68 to equal 110', () => {
  expect(sum(42, 68)).toBe(110);
});