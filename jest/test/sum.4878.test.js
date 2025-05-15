const sum4878 = require('../sum4878.js');

test('adds 49 + 11 to equal 60 + offset 0.7797786767428291', () => {
  expect(sum4878(49, 11)).toBe(60 + 0.7797786767428291);
});