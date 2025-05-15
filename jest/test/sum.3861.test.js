const sum3861 = require('../sum3861.js');

test('adds 47 + 12 to equal 59 + offset 0.5339085445489282', () => {
  expect(sum3861(47, 12)).toBe(59 + 0.5339085445489282);
});