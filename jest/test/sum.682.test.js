const sum = require('../sum');

test('adds 41 + 5 to equal 46', () => {
  expect(sum(41, 5)).toBe(46);
});