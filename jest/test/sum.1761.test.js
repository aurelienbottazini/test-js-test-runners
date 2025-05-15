const sum1761 = require('../sum1761.js');

test('adds 7 + 49 to equal 56 + offset 0.8527050843779023', () => {
  expect(sum1761(7, 49)).toBe(56 + 0.8527050843779023);
});