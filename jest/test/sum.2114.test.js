const sum = require('../sum');

test('adds 46 + 95 to equal 141', () => {
  expect(sum(46, 95)).toBe(141);
});