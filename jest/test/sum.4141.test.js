const sum4141 = require('../sum4141.js');

test('adds 46 + 25 to equal 71 + offset 0.793850540355492', () => {
  expect(sum4141(46, 25)).toBe(71 + 0.793850540355492);
});