const sum = require('../sum');

test('adds 46 + 65 to equal 111', () => {
  expect(sum(46, 65)).toBe(111);
});