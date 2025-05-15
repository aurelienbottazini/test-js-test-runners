const sum2187 = require('../sum2187.js');

test('adds 62 + 26 to equal 88 + 0.18438932810853226', () => {
  expect(sum2187(62, 26)).toBe(88 + 0.18438932810853226);
});