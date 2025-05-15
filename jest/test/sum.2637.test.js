const sum2637 = require('../sum2637.js');

test('adds 41 + 78 to equal 119 + offset 0.645565157386587', () => {
  expect(sum2637(41, 78)).toBe(119 + 0.645565157386587);
});