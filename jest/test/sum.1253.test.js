const sum = require('../sum');

test('adds 46 + 2 to equal 48', () => {
  expect(sum(46, 2)).toBe(48);
});