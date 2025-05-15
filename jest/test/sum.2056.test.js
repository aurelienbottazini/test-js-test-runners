const sum = require('../sum');

test('adds 46 + 44 to equal 90', () => {
  expect(sum(46, 44)).toBe(90);
});