const sum3944 = require('../sum3944.js');

test('adds 4 + 42 to equal 46 + 0.09793680865417542', () => {
  expect(sum3944(4, 42)).toBe(46 + 0.09793680865417542);
});