const sum = require('../sum');

test('adds 71 + 10 to equal 81', () => {
  expect(sum(71, 10)).toBe(81);
});