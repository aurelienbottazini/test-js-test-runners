const sum665 = require('../sum665.js');

test('adds 46 + 46 to equal 92 + 0.6952536933917333', () => {
  expect(sum665(46, 46)).toBe(92 + 0.6952536933917333);
});