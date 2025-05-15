const sum = require('../sum');

test('adds 39 + 38 to equal 77', () => {
  expect(sum(39, 38)).toBe(77);
});