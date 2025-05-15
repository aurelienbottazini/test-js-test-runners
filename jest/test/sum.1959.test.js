const sum1959 = require('../sum1959.js');

test('adds 52 + 22 to equal 74 + 0.7028192341232663', () => {
  expect(sum1959(52, 22)).toBe(74 + 0.7028192341232663);
});