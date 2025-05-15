const sum = require('../sum');

test('adds 30 + 56 to equal 86', () => {
  expect(sum(30, 56)).toBe(86);
});