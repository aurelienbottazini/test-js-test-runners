const sum1734 = require('../sum1734.js');

test('adds 46 + 25 to equal 71 + offset 0.03953400232771953', () => {
  expect(sum1734(46, 25)).toBe(71 + 0.03953400232771953);
});