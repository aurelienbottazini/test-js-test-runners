const sum = require('../sum');

test('adds 46 + 13 to equal 59', () => {
  expect(sum(46, 13)).toBe(59);
});