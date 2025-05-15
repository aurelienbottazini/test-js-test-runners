const sum1472 = require('../sum1472.js');

test('adds 48 + 70 to equal 118 + 0.5402481871915852', () => {
  expect(sum1472(48, 70)).toBe(118 + 0.5402481871915852);
});