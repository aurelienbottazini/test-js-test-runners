const sum = require('../sum');

test('adds 37 + 9 to equal 46', () => {
  expect(sum(37, 9)).toBe(46);
});