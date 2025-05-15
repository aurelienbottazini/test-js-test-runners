const sum4399 = require('../sum4399.js');

test('adds 46 + 96 to equal 142 + 0.22611877037088235', () => {
  expect(sum4399(46, 96)).toBe(142 + 0.22611877037088235);
});