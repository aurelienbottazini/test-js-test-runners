const sum1893 = require('../sum1893.js');

test('adds 16 + 40 to equal 56 + 0.2927342708273355', () => {
  expect(sum1893(16, 40)).toBe(56 + 0.2927342708273355);
});