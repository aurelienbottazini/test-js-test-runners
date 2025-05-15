const sum1976 = require('../sum1976.js');

test('adds 90 + 26 to equal 116 + 0.8201826195472043', () => {
  expect(sum1976(90, 26)).toBe(116 + 0.8201826195472043);
});