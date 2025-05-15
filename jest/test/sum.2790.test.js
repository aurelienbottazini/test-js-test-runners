const sum = require('../sum');

test('adds 14 + 20 to equal 34', () => {
  expect(sum(14, 20)).toBe(34);
});