const sum = require('../sum');

test('adds 46 + 82 to equal 128', () => {
  expect(sum(46, 82)).toBe(128);
});