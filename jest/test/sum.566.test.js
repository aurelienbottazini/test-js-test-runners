const sum = require('../sum');

test('adds 4 + 42 to equal 46', () => {
  expect(sum(4, 42)).toBe(46);
});