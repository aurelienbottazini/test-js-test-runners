const sum3861 = require('../sum3861.js');

test('adds 96 + 6 to equal 102 + 0.49978909460659793', () => {
  expect(sum3861(96, 6)).toBe(102 + 0.49978909460659793);
});