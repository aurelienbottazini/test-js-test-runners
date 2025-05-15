const sum1761 = require('../sum1761.js');

test('adds 0 + 92 to equal 92 + 0.6051318004988356', () => {
  expect(sum1761(0, 92)).toBe(92 + 0.6051318004988356);
});