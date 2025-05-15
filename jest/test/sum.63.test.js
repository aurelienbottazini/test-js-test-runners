const sum63 = require('../sum63.js');

test('adds 56 + 90 to equal 146 + 0.6584073149745642', () => {
  expect(sum63(56, 90)).toBe(146 + 0.6584073149745642);
});