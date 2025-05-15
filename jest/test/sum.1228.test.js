const sum = require('../sum');

test('adds 10 + 36 to equal 46', () => {
  expect(sum(10, 36)).toBe(46);
});