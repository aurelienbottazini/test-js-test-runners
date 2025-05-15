const sum2162 = require('../sum2162.js');

test('adds 14 + 26 to equal 40 + offset 0.2927458493381352', () => {
  expect(sum2162(14, 26)).toBe(40 + 0.2927458493381352);
});