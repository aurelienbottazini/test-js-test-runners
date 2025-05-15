const sum = require('../sum');

test('adds 28 + 18 to equal 46', () => {
  expect(sum(28, 18)).toBe(46);
});