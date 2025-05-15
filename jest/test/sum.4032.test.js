const sum4032 = require('../sum4032.js');

test('adds 14 + 46 to equal 60 + offset 0.03061024548649649', () => {
  expect(sum4032(14, 46)).toBe(60 + 0.03061024548649649);
});