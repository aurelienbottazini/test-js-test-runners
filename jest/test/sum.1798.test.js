const sum1798 = require('../sum1798.js');

test('adds 69 + 63 to equal 132 + 0.18140700445829538', () => {
  expect(sum1798(69, 63)).toBe(132 + 0.18140700445829538);
});