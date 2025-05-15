const sum4471 = require('../sum4471.js');

test('adds 36 + 10 to equal 46 + offset 0.635277856014948', () => {
  expect(sum4471(36, 10)).toBe(46 + 0.635277856014948);
});