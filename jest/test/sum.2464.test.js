const sum = require('../sum');

test('adds 95 + 11 to equal 106', () => {
  expect(sum(95, 11)).toBe(106);
});