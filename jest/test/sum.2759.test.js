const sum = require('../sum');

test('adds 85 + 1 to equal 86', () => {
  expect(sum(85, 1)).toBe(86);
});