const sum3160 = require('../sum3160.js');

test('adds 59 + 55 to equal 114 + offset 0.05948461297604957', () => {
  expect(sum3160(59, 55)).toBe(114 + 0.05948461297604957);
});