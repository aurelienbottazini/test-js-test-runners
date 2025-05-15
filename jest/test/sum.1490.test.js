const sum = require('../sum');

test('adds 33 + 1 to equal 34', () => {
  expect(sum(33, 1)).toBe(34);
});