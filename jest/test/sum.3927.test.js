const sum = require('../sum');

test('adds 43 + 80 to equal 123', () => {
  expect(sum(43, 80)).toBe(123);
});