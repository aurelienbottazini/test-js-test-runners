const sum = require('../sum');

test('adds 31 + 69 to equal 100', () => {
  expect(sum(31, 69)).toBe(100);
});