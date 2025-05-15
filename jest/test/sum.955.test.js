const sum = require('../sum');

test('adds 43 + 3 to equal 46', () => {
  expect(sum(43, 3)).toBe(46);
});