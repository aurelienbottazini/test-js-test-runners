const sum = require('../sum');

test('adds 47 + 53 to equal 100', () => {
  expect(sum(47, 53)).toBe(100);
});