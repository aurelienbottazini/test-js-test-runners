const sum4217 = require('../sum4217.js');

test('adds 37 + 46 to equal 83 + 0.13606071976001588', () => {
  expect(sum4217(37, 46)).toBe(83 + 0.13606071976001588);
});