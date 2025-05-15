const sum = require('../sum');

test('adds 3 + 43 to equal 46', () => {
  expect(sum(3, 43)).toBe(46);
});