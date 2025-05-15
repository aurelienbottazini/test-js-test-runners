const sum1853 = require('../sum1853.js');

test('adds 97 + 20 to equal 117 + offset 0.04831847565560843', () => {
  expect(sum1853(97, 20)).toBe(117 + 0.04831847565560843);
});