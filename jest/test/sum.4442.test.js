const sum = require('../sum');

test('adds 46 + 81 to equal 127', () => {
  expect(sum(46, 81)).toBe(127);
});