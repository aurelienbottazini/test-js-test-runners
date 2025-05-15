const sum = require('../sum');

test('adds 52 + 71 to equal 123', () => {
  expect(sum(52, 71)).toBe(123);
});