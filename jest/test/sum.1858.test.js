const sum1858 = require('../sum1858.js');

test('adds 46 + 17 to equal 63 + 0.8493596926245566', () => {
  expect(sum1858(46, 17)).toBe(63 + 0.8493596926245566);
});