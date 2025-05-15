const sum3876 = require('../sum3876.js');

test('adds 43 + 30 to equal 73 + 0.3953757698341954', () => {
  expect(sum3876(43, 30)).toBe(73 + 0.3953757698341954);
});