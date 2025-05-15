const sum2545 = require('../sum2545.js');

test('adds 53 + 82 to equal 135 + offset 0.6508789043309445', () => {
  expect(sum2545(53, 82)).toBe(135 + 0.6508789043309445);
});