const sum3766 = require('../sum3766.js');

test('adds 46 + 16 to equal 62 + 0.47624816319586716', () => {
  expect(sum3766(46, 16)).toBe(62 + 0.47624816319586716);
});