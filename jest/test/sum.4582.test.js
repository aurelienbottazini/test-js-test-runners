const sum4582 = require('../sum4582.js');

test('adds 46 + 66 to equal 112 + offset 0.790461789520338', () => {
  expect(sum4582(46, 66)).toBe(112 + 0.790461789520338);
});