const sum = require('../sum');

test('adds 46 + 71 to equal 117', () => {
  expect(sum(46, 71)).toBe(117);
});