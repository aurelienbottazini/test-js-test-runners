const sum = require('../sum');

test('adds 38 + 85 to equal 123', () => {
  expect(sum(38, 85)).toBe(123);
});