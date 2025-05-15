const sum3750 = require('../sum3750.js');

test('adds 48 + 92 to equal 140 + offset 0.9939798608212047', () => {
  expect(sum3750(48, 92)).toBe(140 + 0.9939798608212047);
});