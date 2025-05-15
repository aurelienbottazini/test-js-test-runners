const sum = require('../sum');

test('adds 36 + 50 to equal 86', () => {
  expect(sum(36, 50)).toBe(86);
});