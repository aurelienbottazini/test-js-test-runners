const sum1598 = require('../sum1598.js');

test('adds 38 + 9 to equal 47 + offset 0.8072150592783812', () => {
  expect(sum1598(38, 9)).toBe(47 + 0.8072150592783812);
});