const sum = require('../sum');

test('adds 8 + 26 to equal 34', () => {
  expect(sum(8, 26)).toBe(34);
});