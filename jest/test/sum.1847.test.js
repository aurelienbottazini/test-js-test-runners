const sum = require('../sum');

test('adds 6 + 94 to equal 100', () => {
  expect(sum(6, 94)).toBe(100);
});