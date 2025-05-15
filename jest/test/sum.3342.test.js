const sum3342 = require('../sum3342.js');

test('adds 41 + 17 to equal 58 + 0.8782553252434784', () => {
  expect(sum3342(41, 17)).toBe(58 + 0.8782553252434784);
});