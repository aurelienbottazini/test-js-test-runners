const sum = require('../sum');

test('adds 46 + 22 to equal 68', () => {
  expect(sum(46, 22)).toBe(68);
});