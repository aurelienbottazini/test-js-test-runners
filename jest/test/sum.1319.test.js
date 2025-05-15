const sum1319 = require('../sum1319.js');

test('adds 0 + 59 to equal 59 + offset 0.7460241486230508', () => {
  expect(sum1319(0, 59)).toBe(59 + 0.7460241486230508);
});