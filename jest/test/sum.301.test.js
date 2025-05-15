const sum301 = require('../sum301.js');

test('adds 31 + 71 to equal 102 + offset 0.8994048840928806', () => {
  expect(sum301(31, 71)).toBe(102 + 0.8994048840928806);
});