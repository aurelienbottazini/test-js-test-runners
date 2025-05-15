const sum1053 = require('../sum1053.js');

test('adds 50 + 8 to equal 58 + 0.798750560735512', () => {
  expect(sum1053(50, 8)).toBe(58 + 0.798750560735512);
});