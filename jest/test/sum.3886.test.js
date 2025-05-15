const sum = require('../sum');

test('adds 46 + 18 to equal 64', () => {
  expect(sum(46, 18)).toBe(64);
});