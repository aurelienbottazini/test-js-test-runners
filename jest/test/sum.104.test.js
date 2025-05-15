const sum = require('../sum');

test('adds 81 + 5 to equal 86', () => {
  expect(sum(81, 5)).toBe(86);
});