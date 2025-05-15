const sum = require('../sum');

test('adds 46 + 90 to equal 136', () => {
  expect(sum(46, 90)).toBe(136);
});