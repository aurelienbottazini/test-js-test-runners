const sum4971 = require('../sum4971.js');

test('adds 16 + 68 to equal 84 + 0.2579954590364605', () => {
  expect(sum4971(16, 68)).toBe(84 + 0.2579954590364605);
});