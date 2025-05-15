const sum = require('../sum');

test('adds 76 + 48 to equal 124', () => {
  expect(sum(76, 48)).toBe(124);
});