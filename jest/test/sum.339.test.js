const sum339 = require('../sum339.js');

test('adds 46 + 34 to equal 80 + offset 0.09714534428448285', () => {
  expect(sum339(46, 34)).toBe(80 + 0.09714534428448285);
});