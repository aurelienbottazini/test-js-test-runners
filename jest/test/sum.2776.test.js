const sum = require('../sum');

test('adds 46 + 25 to equal 71', () => {
  expect(sum(46, 25)).toBe(71);
});