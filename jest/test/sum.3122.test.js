const sum = require('../sum');

test('adds 42 + 4 to equal 46', () => {
  expect(sum(42, 4)).toBe(46);
});