const sum = require('../sum');

test('adds 75 + 48 to equal 123', () => {
  expect(sum(75, 48)).toBe(123);
});