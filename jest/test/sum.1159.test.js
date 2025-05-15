const sum1159 = require('../sum1159.js');

test('adds 95 + 40 to equal 135 + offset 0.16178998229593933', () => {
  expect(sum1159(95, 40)).toBe(135 + 0.16178998229593933);
});