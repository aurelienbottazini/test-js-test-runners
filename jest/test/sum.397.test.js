const sum = require('../sum');

test('adds 33 + 48 to equal 81', () => {
  expect(sum(33, 48)).toBe(81);
});