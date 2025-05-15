const sum4867 = require('../sum4867.js');

test('adds 46 + 17 to equal 63 + offset 0.4668592428334456', () => {
  expect(sum4867(46, 17)).toBe(63 + 0.4668592428334456);
});