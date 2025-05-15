const sum4032 = require('../sum4032.js');

test('adds 65 + 92 to equal 157 + 0.9175747188182503', () => {
  expect(sum4032(65, 92)).toBe(157 + 0.9175747188182503);
});