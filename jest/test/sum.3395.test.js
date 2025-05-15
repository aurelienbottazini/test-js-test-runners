const sum = require('../sum');

test('adds 1 + 38 to equal 39', () => {
  expect(sum(1, 38)).toBe(39);
});