const sum = require('../sum');

test('adds 92 + 31 to equal 123', () => {
  expect(sum(92, 31)).toBe(123);
});