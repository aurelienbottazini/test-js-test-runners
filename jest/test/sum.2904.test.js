const sum = require('../sum');

test('adds 1 + 33 to equal 34', () => {
  expect(sum(1, 33)).toBe(34);
});