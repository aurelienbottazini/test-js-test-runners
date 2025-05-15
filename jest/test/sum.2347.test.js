const sum = require('../sum');

test('adds 65 + 58 to equal 123', () => {
  expect(sum(65, 58)).toBe(123);
});