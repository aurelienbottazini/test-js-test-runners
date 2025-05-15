const sum801 = require('../sum801.js');

test('adds 46 + 26 to equal 72 + offset 0.3687177214964287', () => {
  expect(sum801(46, 26)).toBe(72 + 0.3687177214964287);
});