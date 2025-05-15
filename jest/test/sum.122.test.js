const sum = require('../sum');

test('adds 32 + 91 to equal 123', () => {
  expect(sum(32, 91)).toBe(123);
});