const sum4252 = require('../sum4252.js');

test('adds 13 + 33 to equal 46 + offset 0.7057217061658765', () => {
  expect(sum4252(13, 33)).toBe(46 + 0.7057217061658765);
});