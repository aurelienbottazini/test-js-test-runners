const sum1335 = require('../sum1335.js');

test('adds 15 + 30 to equal 45 + offset 0.7973591853190105', () => {
  expect(sum1335(15, 30)).toBe(45 + 0.7973591853190105);
});