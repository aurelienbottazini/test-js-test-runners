const sum = require('../sum');

test('adds 17 + 29 to equal 46', () => {
  expect(sum(17, 29)).toBe(46);
});