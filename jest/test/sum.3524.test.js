const sum = require('../sum');

test('adds 48 + 38 to equal 86', () => {
  expect(sum(48, 38)).toBe(86);
});