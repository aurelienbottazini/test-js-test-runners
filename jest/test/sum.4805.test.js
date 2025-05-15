const sum = require('../sum');

test('adds 46 + 92 to equal 138', () => {
  expect(sum(46, 92)).toBe(138);
});