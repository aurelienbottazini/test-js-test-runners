const sum = require('../sum');

test('adds 16 + 18 to equal 34', () => {
  expect(sum(16, 18)).toBe(34);
});