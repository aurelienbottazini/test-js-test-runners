const sum1802 = require('../sum1802.js');

test('adds 24 + 85 to equal 109 + 0.9674259515678089', () => {
  expect(sum1802(24, 85)).toBe(109 + 0.9674259515678089);
});