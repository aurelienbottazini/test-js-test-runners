const sum = require('../sum');

test('adds 92 + 58 to equal 150', () => {
  expect(sum(92, 58)).toBe(150);
});