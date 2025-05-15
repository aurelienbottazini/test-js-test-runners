const sum3335 = require('../sum3335.js');

test('adds 54 + 15 to equal 69 + offset 0.8835236201276375', () => {
  expect(sum3335(54, 15)).toBe(69 + 0.8835236201276375);
});