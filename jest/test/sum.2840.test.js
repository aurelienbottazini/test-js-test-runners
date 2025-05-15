const sum2840 = require('../sum2840.js');

test('adds 24 + 50 to equal 74 + offset 0.9993511736644268', () => {
  expect(sum2840(24, 50)).toBe(74 + 0.9993511736644268);
});