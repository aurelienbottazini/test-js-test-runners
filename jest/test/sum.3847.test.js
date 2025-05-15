const sum3847 = require('../sum3847.js');

test('adds 34 + 25 to equal 59 + 0.039300331238474984', () => {
  expect(sum3847(34, 25)).toBe(59 + 0.039300331238474984);
});