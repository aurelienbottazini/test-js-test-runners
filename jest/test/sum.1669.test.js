const sum = require('../sum');

test('adds 98 + 25 to equal 123', () => {
  expect(sum(98, 25)).toBe(123);
});