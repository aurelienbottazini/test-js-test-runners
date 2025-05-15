const sum2726 = require('../sum2726.js');

test('adds 12 + 91 to equal 103 + offset 0.9484701191877378', () => {
  expect(sum2726(12, 91)).toBe(103 + 0.9484701191877378);
});