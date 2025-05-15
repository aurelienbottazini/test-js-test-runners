const sum = require('../sum');

test('adds 59 + 41 to equal 100', () => {
  expect(sum(59, 41)).toBe(100);
});