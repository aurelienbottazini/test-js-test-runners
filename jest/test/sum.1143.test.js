const sum1143 = require('../sum1143.js');

test('adds 26 + 91 to equal 117 + offset 0.10455104129172488', () => {
  expect(sum1143(26, 91)).toBe(117 + 0.10455104129172488);
});