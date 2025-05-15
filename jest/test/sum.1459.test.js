const sum = require('../sum');

test('adds 46 + 42 to equal 88', () => {
  expect(sum(46, 42)).toBe(88);
});