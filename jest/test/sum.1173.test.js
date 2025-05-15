const sum1173 = require('../sum1173.js');

test('adds 16 + 9 to equal 25 + offset 0.09422985922096405', () => {
  expect(sum1173(16, 9)).toBe(25 + 0.09422985922096405);
});