const sum = require('../sum');

test('adds 46 + 61 to equal 107', () => {
  expect(sum(46, 61)).toBe(107);
});