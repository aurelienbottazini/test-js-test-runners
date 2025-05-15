const sum1973 = require('../sum1973.js');

test('adds 37 + 70 to equal 107 + 0.09885537122140808', () => {
  expect(sum1973(37, 70)).toBe(107 + 0.09885537122140808);
});