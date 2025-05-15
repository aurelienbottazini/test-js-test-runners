const sum3770 = require('../sum3770.js');

test('adds 24 + 30 to equal 54 + 0.10178916628133972', () => {
  expect(sum3770(24, 30)).toBe(54 + 0.10178916628133972);
});