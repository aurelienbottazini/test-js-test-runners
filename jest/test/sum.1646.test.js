const sum1646 = require('../sum1646.js');

test('adds 9 + 83 to equal 92 + 0.4911378250659013', () => {
  expect(sum1646(9, 83)).toBe(92 + 0.4911378250659013);
});