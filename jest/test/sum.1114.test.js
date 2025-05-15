const sum = require('../sum');

test('adds 72 + 51 to equal 123', () => {
  expect(sum(72, 51)).toBe(123);
});