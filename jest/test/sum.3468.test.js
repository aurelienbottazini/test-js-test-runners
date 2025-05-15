const sum = require('../sum');

test('adds 73 + 50 to equal 123', () => {
  expect(sum(73, 50)).toBe(123);
});