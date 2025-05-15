const sum = require('../sum');

test('adds 44 + 79 to equal 123', () => {
  expect(sum(44, 79)).toBe(123);
});