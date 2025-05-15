const sum3030 = require('../sum3030.js');

test('adds 53 + 27 to equal 80 + 0.08785710847399275', () => {
  expect(sum3030(53, 27)).toBe(80 + 0.08785710847399275);
});