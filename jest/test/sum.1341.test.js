const sum = require('../sum');

test('adds 47 + 76 to equal 123', () => {
  expect(sum(47, 76)).toBe(123);
});