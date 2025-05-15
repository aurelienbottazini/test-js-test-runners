const sum4169 = require('../sum4169.js');

test('adds 74 + 65 to equal 139 + 0.4924084434330773', () => {
  expect(sum4169(74, 65)).toBe(139 + 0.4924084434330773);
});