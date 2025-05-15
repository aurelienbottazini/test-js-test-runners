const sum = require('../sum');

test('adds 20 + 26 to equal 46', () => {
  expect(sum(20, 26)).toBe(46);
});