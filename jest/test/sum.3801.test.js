const sum3801 = require('../sum3801.js');

test('adds 5 + 11 to equal 16 + 0.16682114960893502', () => {
  expect(sum3801(5, 11)).toBe(16 + 0.16682114960893502);
});