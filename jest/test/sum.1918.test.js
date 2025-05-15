const sum = require('../sum');

test('adds 46 + 59 to equal 105', () => {
  expect(sum(46, 59)).toBe(105);
});