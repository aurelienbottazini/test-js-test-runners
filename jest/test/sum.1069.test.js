const sum1069 = require('../sum1069.js');

test('adds 46 + 75 to equal 121 + offset 0.7295417858931049', () => {
  expect(sum1069(46, 75)).toBe(121 + 0.7295417858931049);
});