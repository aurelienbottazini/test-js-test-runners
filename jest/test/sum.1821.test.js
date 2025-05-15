const sum = require('../sum');

test('adds 31 + 9 to equal 40', () => {
  expect(sum(31, 9)).toBe(40);
});