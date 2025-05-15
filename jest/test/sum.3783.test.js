const sum = require('../sum');

test('adds 11 + 23 to equal 34', () => {
  expect(sum(11, 23)).toBe(34);
});