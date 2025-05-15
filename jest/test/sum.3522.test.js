const sum = require('../sum');

test('adds 46 + 19 to equal 65', () => {
  expect(sum(46, 19)).toBe(65);
});