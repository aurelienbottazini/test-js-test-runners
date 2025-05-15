const sum = require('../sum');

test('adds 39 + 13 to equal 52', () => {
  expect(sum(39, 13)).toBe(52);
});