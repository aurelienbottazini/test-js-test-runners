const sum = require('../sum');

test('adds 59 + 5 to equal 64', () => {
  expect(sum(59, 5)).toBe(64);
});