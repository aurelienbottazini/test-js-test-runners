const sum = require('../sum');

test('adds 45 + 1 to equal 46', () => {
  expect(sum(45, 1)).toBe(46);
});