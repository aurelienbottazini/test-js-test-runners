const sum = require('../sum');

test('adds 86 + 0 to equal 86', () => {
  expect(sum(86, 0)).toBe(86);
});