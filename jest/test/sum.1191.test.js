const sum1191 = require('../sum1191.js');

test('adds 28 + 18 to equal 46 + 0.9554596676717468', () => {
  expect(sum1191(28, 18)).toBe(46 + 0.9554596676717468);
});