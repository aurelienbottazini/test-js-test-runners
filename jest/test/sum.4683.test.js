const sum = require('../sum');

test('adds 71 + 12 to equal 83', () => {
  expect(sum(71, 12)).toBe(83);
});