const sum = require('../sum');

test('adds 46 + 49 to equal 95', () => {
  expect(sum(46, 49)).toBe(95);
});