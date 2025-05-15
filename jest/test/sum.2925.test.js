const sum = require('../sum');

test('adds 95 + 5 to equal 100', () => {
  expect(sum(95, 5)).toBe(100);
});