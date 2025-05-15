const sum = require('../sum');

test('adds 46 + 83 to equal 129', () => {
  expect(sum(46, 83)).toBe(129);
});