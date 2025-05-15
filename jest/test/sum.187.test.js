const sum = require('../sum');

test('adds 82 + 18 to equal 100', () => {
  expect(sum(82, 18)).toBe(100);
});