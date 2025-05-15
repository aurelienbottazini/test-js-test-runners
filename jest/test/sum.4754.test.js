const sum = require('../sum');

test('adds 11 + 70 to equal 81', () => {
  expect(sum(11, 70)).toBe(81);
});