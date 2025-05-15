const sum = require('../sum');

test('adds 1 + 94 to equal 95', () => {
  expect(sum(1, 94)).toBe(95);
});