const sum = require('../sum');

test('adds 56 + 67 to equal 123', () => {
  expect(sum(56, 67)).toBe(123);
});