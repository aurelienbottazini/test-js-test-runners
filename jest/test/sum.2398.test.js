const sum = require('../sum');

test('adds 48 + 75 to equal 123', () => {
  expect(sum(48, 75)).toBe(123);
});