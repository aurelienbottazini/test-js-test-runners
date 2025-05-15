const sum = require('../sum');

test('adds 69 + 12 to equal 81', () => {
  expect(sum(69, 12)).toBe(81);
});