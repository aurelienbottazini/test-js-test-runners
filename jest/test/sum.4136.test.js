const sum = require('../sum');

test('adds 99 + 1 to equal 100', () => {
  expect(sum(99, 1)).toBe(100);
});