const sum = require('../sum');

test('adds 46 + 64 to equal 110', () => {
  expect(sum(46, 64)).toBe(110);
});