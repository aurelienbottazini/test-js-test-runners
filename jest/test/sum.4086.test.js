const sum = require('../sum');

test('adds 11 + 35 to equal 46', () => {
  expect(sum(11, 35)).toBe(46);
});