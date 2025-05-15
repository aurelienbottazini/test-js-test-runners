const sum = require('../sum');

test('adds 9 + 37 to equal 46', () => {
  expect(sum(9, 37)).toBe(46);
});