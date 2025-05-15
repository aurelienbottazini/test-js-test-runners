const sum = require('../sum');

test('adds 39 + 99 to equal 138', () => {
  expect(sum(39, 99)).toBe(138);
});