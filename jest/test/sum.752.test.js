const sum752 = require('../sum752.js');

test('adds 24 + 44 to equal 68 + 0.08743731418001677', () => {
  expect(sum752(24, 44)).toBe(68 + 0.08743731418001677);
});