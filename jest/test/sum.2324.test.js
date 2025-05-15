const sum = require('../sum');

test('adds 13 + 33 to equal 46', () => {
  expect(sum(13, 33)).toBe(46);
});