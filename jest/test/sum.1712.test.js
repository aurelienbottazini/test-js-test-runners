const sum1712 = require('../sum1712.js');

test('adds 41 + 31 to equal 72 + 0.6288495773672488', () => {
  expect(sum1712(41, 31)).toBe(72 + 0.6288495773672488);
});