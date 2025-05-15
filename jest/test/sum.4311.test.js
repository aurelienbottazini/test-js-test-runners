const sum = require('../sum');

test('adds 25 + 98 to equal 123', () => {
  expect(sum(25, 98)).toBe(123);
});