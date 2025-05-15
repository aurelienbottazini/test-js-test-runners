const sum = require('../sum');

test('adds 29 + 17 to equal 46', () => {
  expect(sum(29, 17)).toBe(46);
});