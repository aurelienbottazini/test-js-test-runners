const sum = require('../sum');

test('adds 46 + 12 to equal 58', () => {
  expect(sum(46, 12)).toBe(58);
});