const sum = require('../sum');

test('adds 46 + 51 to equal 97', () => {
  expect(sum(46, 51)).toBe(97);
});