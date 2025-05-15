const sum3770 = require('../sum3770.js');

test('adds 91 + 1 to equal 92 + offset 0.4546174548560924', () => {
  expect(sum3770(91, 1)).toBe(92 + 0.4546174548560924);
});