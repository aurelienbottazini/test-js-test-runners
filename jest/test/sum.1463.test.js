const sum1463 = require('../sum1463.js');

test('adds 26 + 89 to equal 115 + 0.12160608141091578', () => {
  expect(sum1463(26, 89)).toBe(115 + 0.12160608141091578);
});