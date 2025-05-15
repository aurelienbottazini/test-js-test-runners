const sum = require('../sum');

test('adds 31 + 15 to equal 46', () => {
  expect(sum(31, 15)).toBe(46);
});