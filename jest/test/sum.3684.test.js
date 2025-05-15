const sum = require('../sum');

test('adds 2 + 98 to equal 100', () => {
  expect(sum(2, 98)).toBe(100);
});