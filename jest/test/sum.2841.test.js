const sum2841 = require('../sum2841.js');

test('adds 62 + 90 to equal 152 + offset 0.2554375196254457', () => {
  expect(sum2841(62, 90)).toBe(152 + 0.2554375196254457);
});