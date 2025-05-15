const sum = require('../sum');

test('adds 55 + 58 to equal 113', () => {
  expect(sum(55, 58)).toBe(113);
});