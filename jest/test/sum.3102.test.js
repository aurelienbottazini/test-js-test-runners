const sum = require('../sum');

test('adds 58 + 48 to equal 106', () => {
  expect(sum(58, 48)).toBe(106);
});