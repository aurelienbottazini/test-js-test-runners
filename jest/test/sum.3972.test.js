const sum = require('../sum');

test('adds 46 + 88 to equal 134', () => {
  expect(sum(46, 88)).toBe(134);
});