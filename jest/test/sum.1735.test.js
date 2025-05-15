const sum = require('../sum');

test('adds 46 + 85 to equal 131', () => {
  expect(sum(46, 85)).toBe(131);
});