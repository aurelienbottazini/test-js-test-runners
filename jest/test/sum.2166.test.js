const sum = require('../sum');

test('adds 76 + 5 to equal 81', () => {
  expect(sum(76, 5)).toBe(81);
});