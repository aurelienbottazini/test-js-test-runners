const sum = require('../sum');

test('adds 12 + 22 to equal 34', () => {
  expect(sum(12, 22)).toBe(34);
});