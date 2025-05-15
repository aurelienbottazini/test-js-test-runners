const sum = require('../sum');

test('adds 46 + 6 to equal 52', () => {
  expect(sum(46, 6)).toBe(52);
});