const sum = require('../sum');

test('adds 12 + 69 to equal 81', () => {
  expect(sum(12, 69)).toBe(81);
});