const sum = require('../sum');

test('adds 36 + 10 to equal 46', () => {
  expect(sum(36, 10)).toBe(46);
});