const sum = require('../sum');

test('adds 14 + 92 to equal 106', () => {
  expect(sum(14, 92)).toBe(106);
});